# Obesity & Hernia Surgery Website

A modern Next.js website for obesityherniasurgery.com, optimized for Cloudflare Pages.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates an `out` directory with static files ready for deployment.

## Deploying to Cloudflare Pages

1. Push your code to a GitHub repository
2. In Cloudflare Dashboard, go to Workers & Pages > Create a project
3. Connect your GitHub repository
4. Set build settings:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `out`

## Customization

- Update menu items in `components/Navbar.tsx`
- Update social links in `components/Footer.tsx`
- Add slideshow images to `public/images/`
- Update homepage content in `app/page.tsx`




