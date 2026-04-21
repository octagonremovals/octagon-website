# Octagon Removals — Build & Deploy Agent

## Tech Stack
- **Frontend:** React 19 + Vite + TypeScript + Tailwind CSS v4
- **Routing:** Wouter (NOT React Router, NOT Next.js)
- **Backend:** Express + tRPC + Drizzle ORM + MySQL
- **Real-time:** Socket.io (live chat system)
- **Package manager:** pnpm (NOT npm, NOT yarn)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **UI Base:** shadcn/ui + Radix UI

## Commands
```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Build for production
pnpm check        # TypeScript type check
pnpm test         # Run tests
pnpm db:push      # Push database schema changes
```

## Environment Variables
Required in `.env` file (never commit to GitHub):
```
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
DATABASE_URL=
VITE_GOOGLE_MAPS_API_KEY=
```

## Adding a New Route
1. Create page component in `client/src/pages/`
2. Import in `client/src/App.tsx`
3. Add `<Route path="/new-path" component={NewPage} />` inside `<Switch>`
4. Location-specific routes go BEFORE the dynamic `:slug` route

## File Naming
- Pages: `PascalCase.tsx` (e.g. `StoragePage.tsx`)
- Components: `PascalCase.tsx` (e.g. `HowItWorks.tsx`)
- Data files: `camelCase.ts` (e.g. `locationReviews.ts`)
- Keep files under 500 lines — split into sub-components if larger

## Before Every Change
1. Check if a component already exists before creating new one
2. Check `locations.ts` before adding location data
3. Never modify `pnpm-lock.yaml` manually — run `pnpm install` instead
4. Never modify files in `server/_core/` without understanding the full impact

## Git Workflow
```bash
git add .
git commit -m "Brief description of change"
git push
```
Every push auto-deploys to Vercel. Check Vercel dashboard after push.

## Vercel Deployment
- URL: octagon-website-iota.vercel.app
- GitHub repo: github.com/octagonremovals/octagon-website
- Branch: main (auto-deploys on push)
- Environment variables set in Vercel dashboard (not in code)

## Database Schema
Current tables in `drizzle/schema.ts`:
- `users` — auth (currently disabled/stubbed)
- `chatSessions` — live chat sessions
- `chatMessages` — individual chat messages
- `layoutAnnotations` — layout review feedback

## Performance Rules
- Images: always use WebP format, include width/height attributes
- Lazy load images below the fold
- Code split large pages with React.lazy() if over 200KB
- CDN images use: `https://d2xsxph8kpxj0f.cloudfront.net/`

## TypeScript Rules
- No `any` types — use proper interfaces
- Export types from the same file as the component
- Use `type` not `interface` for data shapes
- Zod schemas for all form validation

## DO NOT
- Never run `npm install` — always use `pnpm install`
- Never commit `.env` file to GitHub
- Never push directly to main without testing locally first
- Never modify `vercel.json` without understanding the build config
- Never delete `pnpm-lock.yaml`
