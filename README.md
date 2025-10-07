# IEEE Student Branch – SAGE University Indore

A modern React + TypeScript single-page application built with Vite and Tailwind CSS. The site showcases the IEEE Student Branch at SAGE University Indore, including events, chapters, gallery, and contact information.

## Tech Stack

- React 18 (TypeScript)
- Vite 5
- Tailwind CSS 3
- shadcn/ui (Radix UI primitives)
- React Router v6
- TanStack Query (optional, used where applicable)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
git clone <REPO_URL>
cd <PROJECT_DIRECTORY>
npm install
```

### Development

```sh
npm run dev
```

The app runs on http://localhost:8080 by default (configured in `vite.config.ts`).

### Production Build

```sh
npm run build
npm run preview
```

## Project Structure

- `src/` – application source
  - `components/` – reusable UI components (including `ui/` from shadcn)
  - `pages/` – route-level pages (`Index`, `About`, `Events`, etc.)
  - `hooks/`, `lib/` – utilities and custom hooks
  - `main.tsx` – app bootstrap
- `public/` – static assets (images, icons)

## Available Scripts

- `npm run dev` – start the dev server
- `npm run build` – build for production
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Styling & UI

- Tailwind CSS is configured in `tailwind.config.ts` and `postcss.config.js`.
- shadcn/ui components live under `src/components/ui` and use Radix primitives.

## Routing

Client-side routing is handled by `react-router-dom`. Check `src/pages` for existing routes and `src/components/Navigation.tsx` for navigation.

## Deployment

This is a static SPA build output (`dist/`). You can deploy to any static host:

- Vercel – drag-and-drop or connect repo
- Netlify – connect repo or use CLI
- GitHub Pages – serve `dist/` via actions or manual upload

## Contributing

1. Create a feature branch
2. Commit with clear messages
3. Open a pull request

## License

This project’s license can be added here (e.g., MIT). If no license is specified, all rights reserved by default.
