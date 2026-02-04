# Frontend - Next.js App

A Next.js application for Understanding_tech with server-side rendering and API routes.

## Features
- Server-side rendering (SSR)
- Static site generation (SSG)
- Built-in API routes
- Optimized for SEO
- Image optimization
- Automatic code splitting
- Full-stack capabilities

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure
```
app/
├── page.js           # Home page
├── layout.js         # Root layout
├── api/             # API routes
├── terms/           # Term pages
└── components/      # Reusable components

public/             # Static assets
lib/               # Utility functions
```

## API Integration
- Internal API routes in `app/api/`
- Or connect to external backends (Django, Flask, Node)

## Deployment
Ready for deployment on Vercel, Netlify, or any Node.js hosting platform.
