# 🪐 Cosmic Explorer

An interactive 3D solar system built with React, Vite, Three.js, and TailwindCSS.
Click any planet to fly to it and explore NASA imagery and facts.

---

## ✨ Features

- Full 3D solar system with all 8 planets + the Sun
- Smooth orbital animations at realistic relative speeds
- Camera flies to any planet on click
- Live NASA imagery fetched from the public NASA Image Library
- Glassmorphism info panel with planet stats and education content
- Full-screen image lightbox
- Saturn & Uranus rings
- 6,000-star background with gentle twinkle

---

## 🚀 Quick Start

### 1 — Prerequisites

Make sure you have **Node.js 18+** installed.
Check with: `node --version`

### 2 — Install dependencies

```bash
cd cosmic-explorer
npm install
```

This installs:
| Package | What it does |
|---|---|
| `react` / `react-dom` | UI framework |
| `three` | 3D graphics engine |
| `@react-three/fiber` | React wrapper for Three.js |
| `@react-three/drei` | Helpful Three.js components (OrbitControls, Html, …) |
| `tailwindcss` | Utility-first CSS framework |
| `vite` | Lightning-fast dev server |

### 3 — Start the dev server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 4 — Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
cosmic-explorer/
├── index.html                  ← Entry HTML (loads Google Fonts)
├── package.json                ← Dependencies
├── vite.config.js              ← Vite build config
├── tailwind.config.js          ← TailwindCSS config
├── postcss.config.js           ← PostCSS (processes Tailwind)
└── src/
    ├── main.jsx                ← React entry point (mounts <App>)
    ├── App.jsx                 ← Root — owns selected planet state
    ├── index.css               ← Tailwind + custom animations
    │
    ├── data/
    │   └── planets.js          ← All planet info (size, colour, orbit…)
    │
    ├── services/
    │   └── nasaApi.js          ← Fetch helper for NASA Image Library
    │
    ├── hooks/
    │   └── useNasaImages.js    ← Custom hook (loading + error states)
    │
    └── components/
        ├── Navbar.jsx          ← Fixed top bar
        ├── SolarSystem.jsx     ← R3F Canvas + camera controller
        ├── Planet.jsx          ← Individual planet mesh + orbit logic
        ├── OrbitRing.jsx       ← Circular line showing orbit path
        ├── StarsBackground.jsx ← 6,000-point star field
        └── PlanetInfoPanel.jsx ← Slide-in info panel + NASA images
```

---

## 🛰️ APIs Used

### NASA Image & Video Library
```
https://images-api.nasa.gov/search?q=mars&media_type=image
```
- **Free** — no API key required
- Searched automatically when you click a planet
- Returns up to 5 images per planet

---

## 🎮 Controls

| Action | Result |
|---|---|
| **Click** a planet | Camera flies to it + info panel opens |
| **Drag** (left-click + drag) | Rotate the view |
| **Scroll** | Zoom in / out |
| **← OVERVIEW** button | Returns to default view |
| **×** (info panel) | Closes the panel |
| Click image | Opens full-screen lightbox |

---

## 🐛 Troubleshooting

**Blank screen / WebGL error**
Your browser or graphics driver may not support WebGL2.
Try Chrome or Firefox (latest versions).

**NASA images won't load**
The NASA Image Library is a public API but occasionally rate-limits.
Refresh the page or try a different planet.

**Build error: `tailwindcss not found`**
Run `npm install` again — sometimes a fresh install is needed.

---

## 🌱 Ideas for Extending This Project

- Add a speed control slider (fast-forward time!)
- Add asteroid belt between Mars and Jupiter
- Show planetary moons (Earth → Moon, Jupiter → Io, Europa…)
- Add a search bar to jump to any planet
- Display the APOD (Astronomy Picture of the Day) on the welcome screen
- Add sound effects (sci-fi ambience)

---

## 📚 Learn More

- [React Three Fiber docs](https://r3f.docs.pmnd.rs/)
- [Three.js docs](https://threejs.org/docs/)
- [NASA APIs](https://api.nasa.gov/)
- [TailwindCSS docs](https://tailwindcss.com/docs)
