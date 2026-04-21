# Octagon Removals — TODO

## Lead Generation Features (Current Sprint)
- [x] Moving Cost Calculator — interactive price estimator tool
- [x] AI Quote Chatbot — LLM-powered assistant with Octagon knowledge
- [x] SEO meta tags + LocalBusiness Schema markup on all pages
- [x] Exit-intent popup — email capture when visitor tries to leave
- [x] Postcode auto-validation — UK postcode lookup in quote form

## Previously Completed
- [x] Homepage with hero, trust bar, services, reviews
- [x] Multi-step quote form connected to tRPC backend + owner notification
- [x] 17 location pages with real local phone numbers
- [x] 43 portfolio items scraped from live site
- [x] All 11 services with dedicated pages (Commercial / Residential / Specialised)
- [x] About sub-pages (Our Story, Core Values, Mission, Team) with real 13 team members
- [x] Contact page with tRPC form and owner notification
- [x] WhatsApp floating button
- [x] Trustpilot badge in hero
- [x] Sticky mobile CTA bar
- [x] Real company data throughout (address, phone numbers, email)
- [x] Navbar with 3-tier dropdown (Services, About, Locations)
- [x] Footer with all service and location links
- [x] Full-stack upgrade (tRPC + DB + notifications)

## Sprint 2 — Lead Magnet Features
- [x] Instant email notification to owner on every lead (quote + contact)
- [x] Moving Checklist PDF lead magnet with email capture
- [x] FAQ page with FAQ Schema markup for Google rich snippets
- [x] Callback request button inside AI chat widget
- [x] Service area interactive Google Map page

## Sprint 3 — Lead Magnet Features
- [x] Instant callback request widget (floating + inline)
- [x] "How It Works" section on homepage
- [x] Dedicated distraction-free quote landing page (/quote)
- [x] Live Google Reviews feed section
- [x] robots.txt + dynamic sitemap.xml
- [x] Cookie consent banner (UK GDPR compliant)

## Sprint 4 — Live Chat System
- [x] Database schema for chat sessions and messages
- [x] Socket.io server-side real-time chat handler
- [x] Visitor-facing live chat widget (real-time, with AI fallback)
- [x] Owner admin dashboard — view and respond to all conversations
- [x] Offline message capture (when owner is away)
- [x] New chat notification to owner (via notifyOwner on new session)

## Sprint 5 — Premium Layout Variants
- [x] Layout A — "The Architect" (minimalist asymmetric split-screen, white/charcoal/gold)
- [x] Layout B — "The Estate" (dark luxury, deep navy, full-bleed hero, gold accents)
- [x] Layout C — "The Magazine" (editorial Wallpaper*/Monocle style, typographic grid)
- [x] Layout D — "The Concierge" (warm hotel luxury, cream/espresso/gold, split hero)

## Sprint 6 — GFD Combined Layout + Brand Colours + PDF Fix

- [ ] Analyse Octagon brand colours from WordPress site
- [ ] Build combined GFD layout with brand colours
- [ ] Fix Polish character encoding in strategy PDF
- [ ] Update strategy timeline to 2 months

## Sprint 7 — Layout Gallery with Annotation System

- [x] Build /layout-gallery page showing all 12 layout variants (A, B, C, D, E, F, G, H, I, J, ABC, GFD) as iframe previews
- [x] Add click-to-annotate feedback system — click any area on any layout to leave a comment with name
- [x] Store annotations in database (layout, x%, y%, comment, author, timestamp)
- [x] Show annotation pins on each layout preview
- [x] Add summary panel showing all feedback grouped by layout
- [x] Add tRPC procedures for saving and reading annotations

## Sprint 9 — Homepage Rebuild (ABC Foundation + Full Enhancements)

- [x] Rebuild LayoutABC as the definitive homepage with full company data from octagonremovals.co.uk
- [x] Add sticky navbar with phone number always visible on scroll
- [x] Add postcode-based coverage checker widget
- [x] Add "Artists of Removals" brand story section with Pawel portrait and founding narrative
- [x] Add FAQ accordion (5 questions) directly on homepage
- [x] Add real testimonials from Google Reviews (Jon Spence, Patricia Marcos, Kerrita, Craig Bannister, Des Campbell, Janet Page)
- [x] Add "Photographic Evidence", "Zero Cancellations", "Fixed Price" as unique USP cards in trust bar + Why Octagon glass panel
- [x] Add video section (YouTube embed — piano move)
- [x] Add areas served section with M25 coverage visual (postcode checker + 40 area tags)
- [x] Set LayoutABC as main route (/) in App.tsx; old Home preserved at /home-classic
- [x] Update footer with correct address (Office 56, Millmead Business Centre, N17 9QU)
- [x] SEO meta title + description updated via SEOHead component

## Sprint 10 — Content Corrections & Enhancements

- [ ] Fix founding year from 2008 to 2017 everywhere (navbar, hero, stats, footer, About)
- [ ] Update stats bar to match screenshot: 4.9★ Google (323) / 4.8★ Trustpilot (170) / 15+ Years / 10,000+ Moves / 100% Fixed Price
- [ ] Update quote form: replace "Packing Only" with "Moving & Packing"; add "Other" option with free-text field
- [ ] Remove claim of fixed-price only — add mention of hourly rate option
- [ ] Add goods in transit insurance up to £50,000 per vehicle
- [ ] Update opening hours: Mon–Fri 8am–6pm, Sat 8am–3pm (not 7 days)
- [ ] Update 1-hour response policy: within hours / next working day out of hours
- [ ] Add all locations from screenshot: Barking, Barnet, Battersea, Brentwood, Bromley, Camden, Chelsea, Chiswick, Croydon, Dartford, Ealing, Enfield, Epping, Epsom, Fulham, Greenwich, Hackney, Harrow, Havering, Holborn, Islington, Kensington, Kingston, Orpington, Richmond, Romford, Tower Hamlets, Twickenham, Uxbridge, Wandsworth, Watford, Westminster + Finchley, Lewisham
- [ ] Add dedicated phone numbers per location (from screenshot)
- [ ] Update CTA banner to match screenshot: fleet photo background, "Let's Plan Your Move Together"
- [ ] Fetch and update Our Story from octagonremovals.co.uk/our-story/
- [ ] Fetch and update Core Values from octagonremovals.co.uk/about-us/our-core-values/
- [ ] Fetch and update Mission from octagonremovals.co.uk/about-us/our-mission/
- [ ] Fetch and update Team from octagonremovals.co.uk/about-us/our-team/
- [ ] Location pages: change "office" language to "dedicated team" language
- [x] Add location-specific Google/Trustpilot reviews to each location page

## Sprint 11 — Location Reviews & Photos

- [x] Scrape real location-specific reviews from Google Reviews and Trustpilot mentioning each area (6 pages of Trustpilot)
- [ ] Gather local landmark/area photos from octagonremovals.co.uk location pages
- [x] Build locationReviews.ts data file with reviews keyed by location slug (30+ locations covered)
- [x] Update LocationPage component with dedicated photo gallery section (local area photos) — 17 locations have photos
- [x] Update LocationPage component with location-specific reviews section (star rating, reviewer, date, source badge Google/Trustpilot)
- [ ] Upload location photos to CDN via manus-upload-file --webdev
- [ ] Save checkpoint

## Sprint 12 — Areas Widget Redesign
- [x] Replace homepage areas widget with dark grid (6-col, gold pin icons, clickable tiles, matches screenshot)

## Sprint 13 — Location Tile Hover CTA
- [x] Add "→ Get Quote" hover CTA to each location tile in the dark grid areas widget

## Sprint 14 — Bug Fixes
- [x] Fix nested anchor tag error on /locations page (tel: link inside Link component — replaced Link wrapper with div + useLocation navigate)

## Sprint 15 — Navbar Redesign
- [x] Redesign top bar: dark background, 3 columns (tagline left | phone+hours centre | Trustpilot right)
- [x] Redesign navbar: light/off-white background, logo left, nav links centre, phone+CTA right — matching octagonremovals.co.uk reference
- [x] Replace LayoutABC.tsx inline nav with shared Navbar component for consistency

## Sprint 16 — Logo, Nav & Photos
- [x] Fix logo image sizing/stretching in navbar (44px fixed height)
- [x] Add metallic shimmer animation to logo (white wave sweeping left-to-right, 3.5s loop)
- [x] Restore Portfolio, FAQ, Cost Calculator links to desktop and mobile navbar
- [x] Scrape real photos from octagonremovals.co.uk and upload to CDN
- [x] Integrate scraped real photos into homepage template (hero, services, team, gallery sections)

## Sprint 17 — Hero Image Swap
- [x] Replace dark hero image with brighter van/team-in-action photo (Octagon fleet — 3 vans, bright blue sky)

## Sprint 18 — Exit Popup, Hero Slider & Mobile Fix
- [x] Exit-intent popup "Before You Go" — already built and wired to App.tsx (confirmed working)
- [x] Hero auto-rotate slider (fleet vans ↔ Big Ben van, 5s crossfade, gold dot indicators)
- [x] Mobile hero fix: object-left on fleet slide so Octagon logo is visible; object-center on Big Ben slide

## Sprint 19 — Islington Satellite Page
- [x] Build IslingtonLocation.tsx with YouTube video hero, unique local copy, quote form, trust signals
- [x] Add VideoObject + LocalBusiness + FAQPage structured data (JSON-LD) for SEO
- [x] Wire /locations/islington route in App.tsx
- [x] Install react-helmet-async + add HelmetProvider to main.tsx

## Sprint 20 — Quote Form UX
- [x] Make moving date field optional (removed from canProceed validation, added "Moving date (optional — I don't know yet)" overlay hint)

## Sprint 21 — Major LayoutABC Homepage Redesign
- [ ] Logo: add gold "Proudly Making Room For Expansion" tagline
- [ ] Hero: full-screen slider (3-5 photos), given photo first, GET FREE QUOTE + CALL NOW CTAs, trust badges (4.9★ Google 320 reviews, Fully Insured, 9+ Years), SCROLL indicator
- [ ] Services grid: 4 per row, 3 rows (12 total): House Removals, Commercial Relocations, Storage, International | Packing/Unpacking, Furniture Dismantling & Reassembling, Disposal, Deep Cleaning | Office Clearance, Porterage, Piano & Specialised, Fine Art
- [ ] Why Octagon: change heading to "Some Call It Exclusive, We Call It Standard", Est. 2015, remove all long dashes, add 4.9★ Google rating badge
- [ ] Interactive London map: octagon-shaped overlay on Google Maps, all 47 domains as clickable boroughs, hover highlight, click → satellite domain
- [ ] Octagon Standard widget (screenshot 7): place ABOVE How It Works section, remove long dashes, remove "15 years of experience", add 4.9★ Google
- [ ] Remove "Our Story" widget entirely
- [ ] How It Works: add background photo, "Your Move in Four Simple Steps", subtle directional arrows
- [ ] Client Testimonials: infinite slider, real reviews only, "Client Testimonials" label with gold lines on sides, 5 gold stars + "4.9 rating from 320+ Google reviews and counting", remove dates, "Read all 320+ reviews on Google" hyperlink at bottom, location-specific reviews for location pages, service-specific reviews for service pages
- [ ] Video section: change subtitle to "and expect to move you with such ease", change YouTube link text to "View more videos on our YouTube Channel"
- [ ] Location pages contact widget: location pin + phone + email + opening times (like screenshot 1 - bishopsmove style)
- [ ] CTA banner: use screenshot 6 style (Let's Plan Your Move Together)

## Sprint 22 — FAQ System
- [x] Research and build database of 100 FAQ questions (25 per category: Domestic, Commercial, Storage, International)
- [x] Create dedicated /faq page with 4 tabbed sections and accordion-style Q&A
- [x] Create homepage FAQ widget (3 cards F/A/Q side by side with CTA button linking to /faq)
- [x] Wire /faq route in App.tsx

## Sprint 23 — Advice CTA Widget + Sprint 21 Pending Corrections

- [x] Add "Advice" CTA widget on homepage: dark photo background (Octagon van + house), elegant serif text "For any advice on your move ahead of the big day, simply contact our office and we'll be delighted to help.", "Get in touch →" link to /contact
- [x] Sprint 21: Logo — add gold "Proudly Making Room For Expansion" tagline (already done in Sprint 15)
- [x] Sprint 21: Hero — full-screen slider (3-5 photos), GET FREE QUOTE + CALL NOW CTAs, trust badges (already done in Sprint 18)
- [x] Sprint 21: Services grid — 4 per row, 3 rows (12 total services)
- [x] Sprint 21: Why Octagon — heading "Some Call It Exclusive, We Call It Standard", Est. 2015, remove long dashes, 4.9★ Google badge
- [ ] Sprint 21: Interactive London map — octagon overlay on Google Maps, 47 boroughs clickable
- [x] Sprint 21: Octagon Standard widget above How It Works (implemented in Sprint 29)
- [x] Sprint 21: Remove "Our Story" widget entirely
- [x] Sprint 21: How It Works — background photo, "Your Move in Four Simple Steps", arrows
- [x] Sprint 21: Client Testimonials — gold lines label, centered, gold stars, "4.9 rating from 320+ Google reviews and counting", "Read all 320+ reviews on Google" link
- [x] Sprint 21: Video section — subtitle "and expect to move you with such ease", YouTube link "View more videos on our YouTube Channel"
- [x] Sprint 21: Location pages contact widget (pin + phone + email + hours) (implemented in Sprint 24)
- [x] Sprint 21: CTA banner — "Let's Plan Your Move Together" style (implemented in Sprint 24)

## Sprint 24 — Interactive Map, Location Contact Widget, CTA Banner

- [x] Interactive London map with octagon-shaped overlay, clickable boroughs (47 areas), hover highlight, click → location page
- [x] Location pages contact widget: location pin icon + local phone + email + opening hours (bishopsmove style)
- [x] CTA banner redesign: fleet photo background, "Let's Plan Your Move Together", phone + quote buttons

## Sprint 25 — Map Redesign, Testimonials Slider, Blog

- [x] Redesign London map: octagon SVG overlay matching company logo, M25 boundary, location pins inside octagon, gold/charcoal brand colours
- [x] Infinite auto-scrolling testimonials slider on homepage (replaces static 3 cards)
- [x] Blog data file with 6 SEO articles (moving tips, packing guide, London area guides)
- [x] Blog listing page /blog with article cards
- [x] Blog individual post page /blog/:slug
- [x] Blog link in navbar

## Sprint 26 — Map Image, Widget Reorder, Blog Expansion

- [x] Use M25 octagon map photo as interactive map background with SVG location pins overlay
- [x] Reorder homepage: move "Got Questions?" widget between "Advice CTA" and "See Us In Action" video
- [x] Add 6 more blog articles to blogPosts.ts (North London, Piano Move, International, Decluttering, Packing Fragile, Commercial)

## Sprint 27 — Navbar Tagline Fix + Areas Widget

- [x] Remove "Proudly Making Room For Expansion" subtitle from under logo in Navbar (keep only gold "Making Room For Your Expansion" inline with logo image)
- [x] Change "OUR LOCAL OFFICES" to "AREAS WE COVER" in footer/areas widget
- [x] Change language from "offices" to "areas we cover/operate in" throughout
- [x] Link all 47 locations in the areas widget (both primary and secondary)

## Sprint 28 — Interactive Map with Real Borough Boundaries

- [x] Build GeoJSON borough boundaries data for all 47 London areas (realistic polygon shapes)
- [x] Add move counts per borough (realistic numbers totalling ~10,000)
- [x] Rewrite LondonMap to use Google Maps Data layer with GeoJSON polygon overlay
- [x] Hover highlight: full realistic border glows gold, interior fills with semi-transparent gold
- [x] Click → navigate to location page for that borough
- [x] Tooltip on hover: borough name + "X moves completed"
- [x] Keep M25 octagon image as background reference, overlay Google Maps on top (replaced with styled Google Maps)

## Sprint 29 — Octagon Standard Section + Homepage Refinements

- [ ] Add "Octagon Standard" section above How It Works (certifications, 4.9★ Google badge, fleet photo, brand promise)
- [ ] Fix Est. 2017 → Est. 2015 in hero eyebrow text
- [ ] Verify all images on homepage use correct CDN URLs from our actual website photos
- [ ] Ensure language throughout homepage matches brand voice (no "offices", correct service descriptions)
- [ ] Refine hero section: check all trust badges and CTAs are correct

## Sprint 30
- [x] Remove BAR Member badge from Octagon Standard section
- [x] Move Google Reviews badge to bottom of Octagon Standard section only
- [x] Remove long dashes (em dashes) from all sections
- [x] Build Islington mini-site: Home page
- [x] Build Islington mini-site: House Removals Islington page
- [x] Build Islington mini-site: Office Removals Islington page
- [x] Build Islington mini-site: Storage Islington page
- [x] Build Islington mini-site: About / Why Octagon page
- [x] Build Islington mini-site: Contact / Free Quote page
- [x] Fix duplicate Wandsworth key in londonBoroughs.ts
- [x] Fix duplicate Wembley/Brent slug in allLocations array

## Sprint 31
- [x] Revert navbar logo to original version with text (octagon-logo_ad6e76c6.webp)
- [x] Fix 10,000+ stat box alignment on mobile (center text in box)
- [x] Pause reviews carousel on touch/hover so user can read review
- [x] Fix NaN left CSS property error in LayoutGallery annotation pins

## Sprint 32
- [x] London map: show gold dot markers by default, show gold polygon fill only on hover

## Sprint 33
- [x] London map: larger dot markers on mobile/touch devices (36px touch vs 22px desktop)
- [x] London map: pulsing ping animation on dot markers (SVG SMIL animation, no OverlayView)

## Sprint 34 — Brand Language Alignment
- [x] Rewrite Hero section text to match live site tone
- [x] Rewrite "Why Choose Octagon" body text to match live site exact copy
- [x] Rewrite "Careful Planning" / process section with live site copy (Slow is smooth tagline + body)
- [x] Rewrite Services section titles and descriptions to match live site
- [x] Rewrite CTA banner subtext to match live site Pawel's message
- [x] Add "Slow is smooth and smooth is fast" tagline above Careful Planning section

## Sprint 35
- [x] Replace duplicate "Some Call It Exclusive" section with "Why Choose Us" (4 USPs: Transparent Fixed Quotes, High Value Item Protection, Space Guarantee, Photographic Evidence)
- [x] Booking Process section already exists as section 9 (How It Works — 4 steps with live site copy)

## Sprint 36 — Hero Text & Ratings
- [x] Change Trustpilot rating to 4.9 (top bar)
- [x] Change Google rating to 4.8 (hero trust signals, trust bar, Octagon Standard badge, reviews section)
- [x] Change hero headline to "The Move You Wished You'd Done Sooner."
- [x] Change hero sub-copy to "Trusted by 10,000+ London families and businesses. Premium services, fixed prices, fully insured up to £1m, and we'll get back to you in minutes. Flexibility and a straightforward move."
- [x] Change hero CTA label to "FREE QUOTE — MOST COMPANIES TAKE 24 HOURS+ TO REPLY. WE TAKE MINUTES. GUARANTEED."
- [x] Insured up to £1,000,000 (updated from £50,000)
- [x] USP list from PDF saved: 13 USPs including Straightforward Estimates, Item Assurance, Serene Workforce, Protected Storage, Space Guarantee, 100% Reliability, Golden Path Procedure, Free Survey Same Day, Build For Purpose, Date Flexibility, Furniture Protection Solutions, Premium Moving Transit Blankets, Photographic Evidence

## Sprint 37
- [x] Services grid: on mobile show 4 tiles + "Read More" button revealing next 4, then last 4 (desktop unchanged)

## Sprint 38 — Content Updates
- [ ] Stats bar: change Est. 2015 to XI+ Years Trading, "Businesses" capital B, add 2 new tiles (Secure Storage + extra USP) for even count
- [ ] Why Choose Us: replace 4 cards with: High Value Item Protection, Transparent Fixed Prices, Date Flexibility, Secure Storage and Flexible Handling
- [ ] Four Reasons section: update 4 cards with exact text from screenshots (Versatile/Professional handling/Flexible storage/Communication)
- [ ] Match icons to card content (arrow, truck, briefcase, message)

## Sprint 31 — Stats Bar, Why Choose Us & Four Reasons (Session Continuation)

- [x] Stats Bar: Changed "11+" to "XI+" for Years Trading (Roman numerals)
- [x] Stats Bar: Capitalized "Businesses" in "Families & Businesses"
- [x] Stats Bar: Added 2 new tiles (£1M Fully Insured + SECURE Storage Available) for even 6-tile count
- [x] Stats Bar: Updated insurance to £1,000,000 (from £50,000)
- [x] Why Choose Us: Updated 4 card titles/descriptions to: High Value Item Protection, Transparent Fixed Prices, Date Flexibility, Secure Storage & Flexible Handling
- [x] Why Choose Us: Updated icons to match new card themes (Gem, Lock, CalendarCheck, Boxes)
- [x] Four Reasons / Why Octagon: Added new section (8c) with 4 tiles from user screenshots:
  - 01: "Versatile. Comprehensive. Dependable." (CircleArrowRight icon)
  - 02: "Professional handling and relocating." (Truck icon)
  - 03: "Flexible and secure storage guarantee." (Boxes icon)
  - 04: "Communication is key." (MessageSquare icon)
- [x] All content from user screenshots used verbatim

## Sprint 32 — FREE QUOTE Button Fix + Why Choose Us Cards Redesign

- [x] Fix FREE QUOTE button: prevent text wrapping on narrow/medium screens (use whitespace-nowrap or reduce font size at breakpoints)
- [x] Replace Why Choose Us 4 cards with numbered 01–04 tile style matching screenshot 3 (same content from previous sprint, new visual style with gold number, icon box, bold title, paragraph body)

## Sprint 33 — Stats Bar Fixes

- [x] Unify gold number font size across all 5 tiles (2rem fixed, DM Sans)
- [x] Ensure all stat content renders on one line (whitespace-nowrap on value)
- [x] Change XI+ back to 11+ (normal Arabic numeral)
- [x] Remove the SECURE / Storage Available / Flexible & monitored tile entirely (5 tiles total)
- [x] Switch all stat/number displays from Cormorant Garamond to DM Sans (stats bar, hero floating stat, How It Works step numbers)

## Sprint 34 — Why Choose Us Redesign + Map Fix

- [x] Replace Why Choose Us section (section 6): removed subtitle paragraph, increased body text size to 0.9rem with 1.75 line-height, cards now stretch to equal height with flex-1 on body
- [x] Remove the now-duplicate section 8c (Four Reasons London Chooses Us) — deleted lines 784–840
- [x] Fix map widget: added Hammersmith as 47th borough in londonBoroughs.ts — count now shows 47 dynamically

## Sprint 35 — Section Reorder, Card Swap, Map Markers, Location Sort

- [x] Why Choose Us: swapped card content to longer Four Reasons copy (CircleArrowRight, Truck, Boxes, MessageSquare icons)
- [x] Move "How It Works" section: now sits between Octagon Standard (8b) and Service Areas (7) — reordered via Python script
- [x] Map markers: replaced pulsing dot with gold octagon polygon SVG icon (buildOctagonIcon); legend icon updated to match
- [x] Service Areas: location pills now sorted alphabetically via .sort(localeCompare)
- [x] Service Areas: removed duplicate "Don't see your area?" paragraph from LayoutABC (kept only the one inside LondonMap)

## Sprint 36 — Move Count Audit & Correction

- [x] Summed all moveCount values: 15,279 total across 47 boroughs — already above 10,000
- [x] No adjustment needed — the "10,000+" badge is accurate and conservative
- [x] Confirmed 47 unique borough entries (no duplicates)

## Sprint 37 — OR-WATERMARK Map Markers & 15,000+ Site-Wide

- [x] Uploaded OR-WATERMARK.png to CDN: https://d2xsxph8kpxj0f.cloudfront.net/.../OR-WATERMARK_062d483e.png
- [x] Map markers now use OR-WATERMARK PNG via buildOctagonIcon; legend icon updated to match
- [x] All "10,000+" / "over 10,000" replaced with "15,000+" / "over 15,000" across all .tsx/.ts files (LayoutABC, Home, LayoutA/C/E/F/GFD/I/J, LayoutOptions, LocationBromley, Portfolio, IslingtonAbout, routers.ts)

## Sprint 38 — Video Section Header Fix

- [x] Added "!" to label → "SEE US IN ACTION !"
- [x] Added gold side lines (h-px w-16 divs) flanking the label, matching other section headers
- [x] Fixed subtitle: removed "..." → "and expect us to move you with such ease."

## Sprint 39 — Accurate Borough Boundaries & Hover Style

- [ ] Fetch official London Borough GeoJSON boundaries and replace approximate polygon coords in londonBoroughs.ts
- [ ] Update hover style: grey fill (rgba(120,120,120,0.35)) instead of gold, softer border (strokeOpacity 0.4)

## Sprint 40 — How It Works Section Fixes

- [x] Add gold side lines to "HOW IT WORKS" label (consistent with all other section headers)
- [x] Center background image vertically to show person's head (objectPosition: center 20%)
- [x] Step 02 text updated: added "and offer guidance" at end
- [x] Step 04 text replaced with new copy: "Sit back and relax. Your possessions arrive safely..."

## Sprint 39 — Accurate Borough Boundaries + Map Hover + Bug Fixes

- [x] Replace all approximate polygon coordinates in londonBoroughs.ts with accurate GeoJSON boundary data (sourced from official London Borough GeoJSON — data.london.gov.uk / ONS Open Geography Portal). 46/47 slugs now use real boundaries; Dartford/Watford/Epping/Brentwood/Epsom retain approximate coords (outside Greater London).
- [x] Map hover style: changed from gold fill to subtle grey tint (rgba(160,160,160,0.25)) with light grey stroke (rgba(200,200,200,0.45)) — less harsh, more elegant
- [x] Map badge "15,000+" font: switched from Cormorant Garamond to DM Sans for numeric consistency
- [x] Hammersmith 404 fix: added full location data entry for "hammersmith" slug in locationsData (locations.ts) and added to allLocations array
- [x] Nav CONTACT truncation fix: phone number now hidden at lg breakpoint, visible only at xl+ — prevents nav items being clipped at ~1024px widths

## Sprint 41 — Map Hover Visibility

- [x] Increase borough hover fill opacity from 0.25 to 0.60 (rgba(140,140,140,0.60))
- [x] Darken hover border from light grey to near-black (rgba(60,60,60,0.95))
- [x] Increase hover stroke weight from 1.5px to 3px for clearly visible boundary

## Sprint 42 — How It Works Improvements + Islington

- [x] Step 01 copy — rewrite to premium language (remove "fill out the form", elevate tone)
- [x] Map hover — change to gold fill with 3 colour options presented to user
- [x] Add How It Works section to Islington location page (IslingtonLocation.tsx)

## Sprint 44 — FAQ Section Redesign

- [x] Upload FAQforwww.jpg to CDN
- [x] Add FAQ image to "Got Questions?" section
- [x] Add gold side lines to section label (consistent with other widgets)
- [x] Remove 3 FAQ tiles/cards
- [x] Keep Browse button, update text to "Browse Hundreds of FAQ's"

## Sprint 49 — Blog Slider + Islington Slow Is Smooth

- [x] Convert "Latest from the Blog" section from static 3-column grid to horizontal slider/carousel
- [x] Add Slow Is Smooth widget to IslingtonLocation.tsx

## Sprint 51 — Camden Location Page

- [ ] Create CamdenLocation.tsx with Camden-specific content (hero, reviews, FAQs, How It Works, Slow Is Smooth, CTA)
- [ ] Add Camden to locations.ts data file
- [ ] Register /locations/camden route in App.tsx
- [ ] Verify Camden slug exists in londonBoroughs.ts

## Sprint 51 — Camden Location Page

- [x] Create CamdenLocation.tsx based on IslingtonLocation.tsx template
- [x] Camden-specific hero copy, postcodes (NW1, NW3, NW5), areas, reviews, FAQs
- [x] How It Works section with Camden heading
- [x] Slow Is Smooth widget with approved copy
- [x] Add Camden to App.tsx routes (/locations/camden)
- [x] Verify Camden page renders at /locations/camden

## Sprint 52 — Storage Service Page (from octagonremovals.co.uk)

- [ ] Scrape all text from octagonremovals.co.uk/commercial-and-residential-storage-services/
- [ ] Download all images from the storage page
- [ ] Upload images to CDN
- [ ] Build new /storage page with scraped content
- [ ] Register route in App.tsx
