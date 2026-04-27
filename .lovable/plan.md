
# Tarini's Corner — Personal Site Plan

A single-page, mobile-first personal website with a soft pastel, playful aesthetic — like a cozy digital diary.

## Design System

- **Palette (pastels):** blush pink, warm beige/cream background, sage/mint green, soft peach, muted lilac accent
- **Typography:** Handwritten display font (Caveat or Patrick Hand) for headings; clean sans-serif (Inter / Quicksand) for body
- **Shapes:** Fully rounded corners (xl/2xl/3xl), organic blob backgrounds, no sharp edges
- **Effects:** Soft drop shadows, subtle tilt on cards (sticky-note feel), gentle hover scale + rotate, smooth scroll
- **Doodles:** Inline SVG/Lucide stickers — flowers, hearts, sparkles, arrows, stars — scattered as decorative accents

## Page Sections (single page, `/`)

### 1. Hero
- Cream background with soft blob shapes behind
- Big handwritten headline: **"Tarini's corner of the internet"**
- Warm subheading: e.g. "a lil' cozy space where I share my favorite things, playlists & life bits ✿"
- Circular portrait with a soft pastel ring + slight tilt
- Playful "Hi!" sticker bubble + hand-drawn arrow pointing to portrait
- Small floating doodles (flower, sparkle, heart)

### 2. Social — "Hang w/ me on"
- Handwritten section title with underline doodle
- Row/grid of rounded pastel icon tiles: Instagram, YouTube, Snapchat, Spotify, Pinterest, Twitter, LinkedIn
- Each tile a different pastel shade, hover lifts + rotates slightly

### 3. Content Cards — "Lil' things I love"
Three sticky-note style cards (alternating slight tilts), pink-leaning palette:
- 🎧 **Bollywood running playlist** — short fun description + "Listen" button
- 🎥 **My filming gear** — "all the things I use to make videos" + "See gear" button
- 💌 **Business enquiries** — contact prompt + email button
Cards have rounded corners, soft shadow, tape-strip doodle on top.

### 4. Footer
- Tiny handwritten signoff: "made with ♡ by Tarini"
- Small doodle row

## Interactions
- Smooth scroll behavior
- `animate-fade-in` on section reveal
- `hover-scale` + slight rotate on cards & social tiles
- Floating doodles with gentle CSS keyframe wiggle/float

## Technical Notes
- Update `src/index.css` design tokens to pastel palette (HSL) + add handwritten font via Google Fonts in `index.html`
- Extend `tailwind.config.ts` with pastel semantic colors, float/wiggle keyframes
- Build components: `Hero`, `Socials`, `ContentCards`, `Doodle` (SVG sticker wrapper), `Footer` in `src/components/`
- Replace `src/pages/Index.tsx` to compose these sections
- Use Lucide icons for socials (Instagram, Youtube, Twitter, Linkedin) + custom inline SVGs for Snapchat, Spotify, Pinterest
- Portrait: use a placeholder pastel illustration (or `public/placeholder.svg` styled in a circle) until the user supplies a real photo
- Fully responsive: single column on mobile, 2–3 col grids from `md:` upward

## Out of Scope (can add later)
- Real portrait photo upload
- Actual links to playlists / gear pages
- Blog or CMS backend
