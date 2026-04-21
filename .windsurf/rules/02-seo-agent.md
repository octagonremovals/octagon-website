# Octagon Removals — SEO Agent

## Every page MUST have SEOHead component
Import and use SEOHead at the top of every page component:

```tsx
import SEOHead from "@/components/SEOHead";

// Inside component return:
<SEOHead
  title="Page Title Here"
  description="150-160 character description here"
  canonical="/page-slug"
/>
```

## Title Formula
- Service pages: `[Service] London | Octagon Removals`
- Location pages: `Removals in [Location] | Octagon Removals`
- Blog posts: `[Post Title] | Octagon Removals Blog`
- Never exceed 60 characters

## Description Formula
- Always 150-160 characters
- Include: service + location + key USP + call to action
- Example: "Premium house removals in Bromley. Fixed-price quotes, fully insured up to £1m, 4.9★ rated. Serving all BR postcodes. Get a free quote today."

## Company Data (use exactly)
- Phone: `0208 521 8000`
- Email: `info@octagonremovals.co.uk`
- Address: `Office 56, Millmead Business Centre, Millmead Road, South Tottenham, London N17 9QU`
- Rating: `4.8/5 Google (323 reviews)`, `4.9/5 Trustpilot (170 reviews)`
- Founded: `2017` (NOT 2015, NOT 2008)
- Moves completed: `15,000+`
- Insurance: `fully insured up to £1,000,000`

## Location Pages SEO Requirements
Every location page needs:
1. SEOHead with location-specific title and description
2. H1 containing location name and "removals"
3. LocalBusiness schema with location-specific phone
4. FAQ schema (minimum 3 questions)
5. Breadcrumb: Home > Locations > [Location Name]

## Service Pages SEO Requirements
Every service page needs:
1. SEOHead with service-specific title
2. H1 containing service name
3. Service schema in JSON-LD
4. FAQ schema (minimum 4 questions)
5. Internal links to related services and location pages

## Internal Linking Rules
- Every service page links to: 3 location pages + 2 related services
- Every location page links to: all main services + 2 nearby locations
- Homepage links to: all service pages + top 6 location pages
- Blog posts link to: relevant service page + relevant location page

## Keywords to Include (naturally)
- "London removals" / "removals London"
- "house removals" / "office removals"
- "fixed price removals"
- "fully insured removals"
- "[Borough] removals" (for location pages)

## DO NOT
- Never duplicate meta descriptions across pages
- Never use keyword stuffing
- Never leave canonical URL empty
- Never use generic descriptions like "We offer removal services"
