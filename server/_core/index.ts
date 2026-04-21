import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { setupChatSocket } from "../chat";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // Dynamic sitemap.xml for SEO
  app.get("/sitemap.xml", (_req, res) => {
    const baseUrl = "https://octagonremovals.co.uk";
    const locations = [
      "north-london", "south-london", "east-london", "west-london", "central-london",
      "bromley", "islington", "epsom", "watford", "brentwood", "romford",
      "croydon", "orpington", "enfield", "epping", "finchley", "fulham",
      "kingston-upon-thames", "dartford", "twickenham", "uxbridge", "greenwich"
    ];
    const services = [
      "london-removals", "packing-unpacking", "furniture-dismantling",
      "pre-post-cleaning", "disposal", "storage", "office-relocation",
      "office-clearance", "porterage", "piano-moving", "international-removals"
    ];
    const staticPages = [
      "", "services", "about", "locations", "portfolio", "contact",
      "get-quote", "calculator", "faq", "moving-checklist", "service-areas"
    ];
    const today = new Date().toISOString().split("T")[0];
    const urls = [
      ...staticPages.map(p => `${baseUrl}/${p}`),
      ...locations.map(l => `${baseUrl}/locations/${l}`),
      ...services.map(s => `${baseUrl}/services/${s}`),
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === baseUrl + "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;
    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
  });

  // Set up real-time chat via Socket.io
  setupChatSocket(server);

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
