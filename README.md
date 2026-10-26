# Woriidem — Official Website

Portfolio site for **Woriidem** (Uzochi Gerald Ihenacho), songwriter, composer and artist developer.
Designed and built by JayDev Studio.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · next-themes

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production check before pushing
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Sends the contact form to Gerald's inbox. Get a free key at web3forms.com using igerald278@gmail.com. Without it, the form opens the visitor's email app instead. |
| `NEXT_PUBLIC_SITE_URL` | The live URL (used for SEO, sitemap and link previews). |

Add the same two variables in **Vercel → Project → Settings → Environment Variables**.

## Where things live

- `lib/content.ts` — every piece of copy, credit, stream count, press item and photo list. Edit text here.
- `app/globals.css` — light/dark colour tokens and the button styles (hover sweeps, glow).
- `components/Navbar.tsx` — navbar (transparent over hero → glass on scroll, hides on scroll down, mobile menu).
- `public/brand` — logo files (light and dark versions, horizontal lockup, icon).
- `public/images` — photos. `public/covers` — single artwork.

## Updating later

- **Hxppier 25 goes public:** in `lib/content.ts`, change `hxppier.status` and point `hxppier.soundcloud` to the public set.
- **New credit:** add an entry to `credits` in `lib/content.ts` and drop the cover in `public/covers`.
- **Stream counts:** update the `streams` values and the 9M+ stat as numbers grow.
