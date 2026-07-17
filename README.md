# templates.rexplore

REXPLORE Technologies template catalog built with Vite + React.  
It includes a category-based landing page and routeable template previews for implemented blueprints.

## Tech stack

- React 18
- React Router 6
- Tailwind CSS
- Framer Motion
- Lucide React
- Vite

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install and run

```bash
npm ci
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build locally
```

## Implemented templates

- Business: Corporate V1/V2, Brochure V1/V2/V3, Service Provider V1/V2, Catalog V1/V2/V3, Startup
- Ecommerce: Marketplace V1, Brand Store V1
- Functional: Dashboard

## Adding a new template

When adding a new page:

1. Create the page component in `/src/pages`.
2. Add the subtype label under `REXPLORE_CATALOG` in `/src/App.jsx`.
3. Map subtype selection to a route in `handleSubtypeClick` in `/src/App.jsx`.
4. Register the `<Route />` in `/src/App.jsx`.
5. Optionally add sibling links in `TemplateDock` suggestions.

## Project structure

```text
/
├── src/
│   ├── pages/              # Template page components
│   ├── App.jsx             # Catalog data, navigation logic, and routes
│   ├── index.css           # Global styles and theme utilities
│   └── main.jsx            # Application entry point
├── plan.md                 # Template roadmap/prompts
├── package.json
└── tailwind.config.js
```
