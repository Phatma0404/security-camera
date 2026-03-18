# ServiceSecurity

Professional security services website built with React and Tailwind CSS.

## Tech Stack

- **React 19** — UI framework
- **React Router v7** — Client-side routing
- **Tailwind CSS v4** — Utility-first styling
- **Vite** — Build tool & dev server
- **Lucide React & React Icons** — Icon libraries

## Features

- Fully responsive design (mobile, tablet, desktop)
- Sticky navbar with scroll animation
- Animated hamburger menu
- Smooth scroll navigation between sections
- Blog listing with detail pages
- Contact page with Google Maps integration
- Scroll-to-top button
- CSS animations (partner slider, hover effects)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with all sections |
| Blog Detail | `/blog/:id` | Individual blog post with sidebar |
| Contact | `/contactUs` | Contact form, newsletter, map |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Configured for **Netlify** deployment with `_redirects` file for SPA routing.

Build settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
