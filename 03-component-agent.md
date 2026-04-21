# Octagon Removals — Component Agent

## Project Structure
```
client/src/
├── components/         # Shared reusable components
│   ├── ui/            # shadcn/ui base components (DO NOT modify)
│   ├── Navbar.tsx     # Global navbar — edit only this for nav changes
│   ├── Footer.tsx     # Global footer
│   ├── SEOHead.tsx    # SEO meta tags — use on every page
│   ├── QuoteForm.tsx  # Multi-step quote form
│   ├── LocationPage.tsx # Reusable location page template
│   └── HowItWorks.tsx # Reusable section component
├── pages/             # One file per route
├── data/              # Static data files
│   ├── locations.ts   # All location data
│   ├── blogPosts.ts   # Blog articles
│   ├── faqData.ts     # FAQ questions
│   └── locationReviews.ts # Reviews by location
└── index.css          # Design system tokens — DO NOT add random colours here
```

## Adding a New Location Page
1. Add location data to `client/src/data/locations.ts`
2. Add location reviews to `client/src/data/locationReviews.ts`  
3. Add borough to `client/src/data/londonBoroughs.ts`
4. Create page using `LocationPage` component (DO NOT build from scratch):

```tsx
import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";

export default function NewLocationPage() {
  const data = locationsData["location-slug"];
  return <LocationPage data={data} />;
}
```

5. Register route in `client/src/App.tsx`

## Adding a New Service Page
Use `ServicePage` component with slug routing — DO NOT create individual files:
- Service pages are handled by `/services/:slug` route
- Add service data to the services data object
- ServicePage component renders it automatically

## Component Rules
- Always use `@/` path alias (not relative `../../`)
- Always import types from the same file as the component
- Use `cn()` from `@/lib/utils` for conditional classNames
- Use shadcn/ui components from `@/components/ui/` for forms, buttons, dialogs
- Use `framer-motion` for animations (already installed)
- Use `lucide-react` for icons (already installed)

## Quote Form
The QuoteForm component is the primary conversion element. Rules:
- Never remove or simplify the multi-step flow
- Always show trust signals near the form
- Form submits via tRPC to `/api/trpc/leads.submit`
- Owner gets email notification on every submission

## Navbar
- Shared `Navbar` component used on ALL pages
- Has dropdown: SERVICES (4 columns), ABOUT, LOCATIONS
- Gold FREE QUOTE button always visible
- Phone number `0208 521 8000` always visible on desktop
- DO NOT add new top-level nav items without checking mobile layout

## DO NOT
- Never modify files in `components/ui/` (shadcn base components)
- Never hardcode colours inline — use CSS variables or brand hex values
- Never create duplicate components — check if one exists first
- Never remove the QuoteForm from the homepage
