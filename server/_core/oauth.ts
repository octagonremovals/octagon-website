// TODO: Re-enable Manus OAuth when user authentication is needed.
// import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
// import type { Request, Response } from "express";
// import * as db from "../db";
// import { getSessionCookieOptions } from "./cookies";
// import { sdk } from "./sdk";
import type { Express } from "express";

// function getQueryParam(req: Request, key: string): string | undefined {
//   const value = req.query[key];
//   return typeof value === "string" ? value : undefined;
// }

export function registerOAuthRoutes(_app: Express) {
  // TODO: Manus OAuth callback disabled — site does not require user authentication.
  // app.get("/api/oauth/callback", async (req: Request, res: Response) => { ... });
}
