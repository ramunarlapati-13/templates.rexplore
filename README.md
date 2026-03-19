# REXPLORE TECHNOLOGIES: High-Fidelity Digital Architecture Catalog

> **Version 1.2.0** | **"Industrial Visionary" Aesthetic** | **Blueprint System**

This repository is a master collection of specialized, industrial-grade digital architectures for various business and functional verticals. Built with **React**, **Tailwind CSS**, and **Framer-Motion**, these blueprints prioritize technical efficiency, information density, and a premium "Cyberkinetic" user experience.

---

## 🗺️ Project Navigation

| Category | Status | Subtypes Implemented |
| :--- | :---: | :--- |
| **01 BUSINESS** | 🟢 100% | Corporate (V1, V2), Brochure (V1-V3), Service Provider (V1, V2), Catalog (V1-V3), Startup |
| **02 ECOMMERCE** | ⚪ 0% | *Planned: Marketplace, Brand Store, Auction, Dropshipping* |
| **03 PERSONAL** | ⚪ 0% | *Planned: Portfolio, Resume, Blog, Memorial* |
| **04 CONTENT** | ⚪ 0% | *Planned: Niche Blog, News Portal, Magazine, Wiki* |
| **05 COMMUNITY** | ⚪ 0% | *Planned: Social Network, Forum, Q&A Site, Membership Portal* |
| **06 EDUCATION** | ⚪ 0% | *Planned: E-learning, University, Nonprofit, Government* |
| **07 FUNCTIONAL** | 🟡 15% | Dashboard (V1) |
| **08 ENTERTAINMENT**| ⚪ 0% | *Planned: Video Stream, Music Stream, Gaming* |

---

## ⚖️ Operational Protocols

To maintain the architectural integrity of the Rexplore Catalog, all developers must adhere to the following strictly enforced protocols:

### 🛠️ 01. Architectural Protocols (Dev Ops)
- **Naming Protocol**: Components must use versioned PascalCase: `[Category][Version].jsx` (e.g., `CatalogV3.jsx`). Paths must use kebab-case: `/catalog-v3`.
- **Registry Protocol**: All blueprints must be registered in the `REXPLORE_CATALOG` constant in `App.jsx` to appear in the master selector.
- **Route Protocol**: Every page must have a corresponding `<Route>` in the main router, and suggestions must be added to the `TemplateDock` mapping to enable rapid version switching.

### 🎨 02. Aesthetic Protocols (UI/UX)
- **Archi-Core Theme**: All components must utilize the `archi` color palette defined in `tailwind.config.js`. Base colors: `#121416` (Background), `#00e5ff` (Primary Cyan).
- **Glassmorphism**: Use the `.glass-panel` utility (12-20px blur) for all overlay elements and modals.
- **Neon-Bordering**: Implement `neon-border-cyan` or `neon-border-magenta` for high-impact cards or profile sections.
- **Micro-Animations**: Primary action buttons must use the `animate-blink-yellow` class to signify "system readiness" to the user.

### 📡 03. Communication Protocols (Terminology)
- **System Vocabulary**: Use industrial/technical terminology for UI labels:
  - *Deploy* instead of *Submit*.
  - *Initialize Scan* instead of *Search*.
  - *Registry* instead of *List*.
  - *Neural Reveal* for hover animations.
- **Thematic Identifiers**: Use atmospheric keywords in descriptions: `VOID_PROTOCOL`, `KINETIC_ENGINE_V1`, `THREAT_NEUTRALIZATION`, `QUANTUM_PIPELINE`.
- **Status HUDs**: Every page should ideally feature a small "System Health" or "Operational Status" banner (e.g., `STATUS: OPTIMAL` or `SCANNING...`).

---

## 🚀 Key Features

### 🏁 Master Catalog Interface
The index page (`/`) acts as a neural gateway, allowing users to select their desired architecture from 8 core industrial categories.

### ⚓ Dynamic Template Dock
A persistent floating navigation component (`/src/App.jsx`) that allows users to instantly switch between blueprint versions and return to the master catalog.

---

## 🧪 Tech Stack

- **Core**: [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **UI Logic**: [Framer Motion](https://www.framer.com/motion/) (Cinematic transitions)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (PostCSS-based design tokens)
- **Icons**: [Lucide React](https://lucide.dev/) (Industrial iconography)
- **Routing**: [React Router](https://reactrouter.com/) (Declarative v6)

---

## 📂 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable cross-page modules
│   ├── pages/              # Blueprint implementations (V1, V2, V3 etc.)
│   ├── App.jsx             # Router config, Registry logic, & Master Dock
│   ├── index.css           # Global design tokens (Glass/Neon/Grids)
│   └── main.jsx            # Entry point
├── plan.md                 # MASTER BLUEPRINT (Prompts & Roadmap)
└── tailwind.config.js      # Archi-Core Color palette & Font definition
```

---
*© 2024 REXPLORE TECHNOLOGIES. All rights reserved. ENGINEERED FOR SCALE.*
