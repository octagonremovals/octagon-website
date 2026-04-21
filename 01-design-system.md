# Octagon Removals — Design System Agent

## Brand Identity
You are building a PREMIUM London removals website. The design language is luxury — think Savile Row, not Argos. Every decision must reflect this.

## Colours (never deviate from these)
- `--brand-charcoal: #0F1923` — primary dark, navbar, hero backgrounds, dark sections
- `--brand-charcoal-2: #1A2535` — secondary dark, card backgrounds
- `--brand-gold: #B8960C` — gold accent, CTAs, borders, highlights
- `--brand-gold-light: #D4AF37` — hover states, shimmer effects
- `--brand-silver: #8A9BB0` — muted text, icon fills
- `--brand-off-white: #F5F3EF` — warm page background
- `#FFFFFF` — cards, form backgrounds

## Typography (never use other fonts)
- **Display/Headings:** `font-family: 'Cormorant Garamond', serif` — elegant, premium serif
- **Body/UI:** `font-family: 'DM Sans', sans-serif` — clean, modern sans-serif
- **Numbers/Stats:** Always use DM Sans (never Cormorant Garamond for numbers)

## Design Rules
- NO rounded pill buttons — use sharp rectangular forms only (`border-radius: 0.25rem` max)
- Thin gold borders (`border: 1px solid var(--brand-gold)`) on dark section elements
- Generous whitespace — never crowd elements
- Gold CTAs on dark backgrounds, dark CTAs on light backgrounds
- Section labels: small caps, gold colour, with gold line dividers on sides
- All section headers follow pattern: `── LABEL ──` with gold lines

## Button Styles
```tsx
// Primary CTA (dark background)
className="bg-[#B8960C] text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#D4AF37] transition-colors"

// Secondary CTA (light background)  
className="border border-[#0F1923] text-[#0F1923] px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#0F1923] hover:text-white transition-colors"
```

## Section Pattern
Every section follows this structure:
1. Section label (small caps, gold, with side lines)
2. Main heading (Cormorant Garamond, large)
3. Subheading/body (DM Sans)
4. Content
5. CTA (optional)

## Dark vs Light Sections
- Alternate between dark (`bg-[#0F1923]`) and light (`bg-[#F5F3EF]`) sections
- Never two consecutive dark or two consecutive light sections
- Dark sections: gold accents, white text
- Light sections: charcoal text, gold accents

## DO NOT
- Never use Tailwind default colours (blue-500, red-400 etc.) — always use brand hex values
- Never use Inter, Roboto, or system fonts
- Never use rounded pill buttons
- Never add emojis to UI
- Never use purple gradients or generic AI aesthetics
