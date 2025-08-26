# 🌌 Interactive 3D Solar System

A beautifully rendered, interactive 3D model of the Earth-Moon system within a vast cosmic scene, built with **React Three Fiber**, **Three.js**, and **React**. Explore space with smooth orbit controls, realistic lighting, and mesmerizing animations — all in your browser!

![Solar System Preview]
*(Replace with actual screenshot or GIF later)*

---
<hr>
## 🚀 Features

- 🌍 **Realistic Earth** with texture and self-rotation
- 🌔 **Moon orbiting Earth** with tidal lock simulation
- ☀️ **Distant Sun** with directional lighting (sunlight effect)
- 🌌 **Starfield background** for deep-space immersion
- 🪐 **Cosmic drift** – the entire system slowly rotates
- 🔍 **Smooth camera controls** with zoom limits
- 🌑 **Moon shadow on Earth** during eclipse alignment
- ⚙️ Built with performance and modularity in mind

---
<hr>
## 🛠 Technologies Used

- [React](https://reactjs.org/) – UI & component structure
- [Three.js](https://threejs.org/) – 3D rendering engine
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) – React renderer for Three.js
- [@react-three/drei](https://docs.pmnd.rs/drei) – Useful helpers (controls, textures, lights)
- Vite or Next.js (optional) – Fast development setup

---

## 🖥️ Live Demo

👉 [View Demo] https://earth-and-moon.vercel.app

---
<hr>
## 📦 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/3d-solar-system.git
   cd 3d-solar-system
2.  Install dependencies:

  npm install
3. Start the development server:

 npm run dev

4.Open http://localhost:3000 in your browser.
<hr>

<h3>🗺 Project Structure</h3>
src/
├── components/
│   ├── Earth.jsx       – Textured rotating Earth
│   ├── Moon.jsx        – Moon with texture and rotation
│   ├── Sun.jsx         – Sun visual + directional light
│   ├── StarBackground.jsx – Full-sky starfield
│   └── canvas.jsx      – Main 3D scene with OrbitControls
├── public/
│   ├── earth.jpg       – Earth texture
│   ├── moon.jpg        – Moon texture
│   ├── sun.jpg         – Sun texture
│   └── stars.jpg       – Starry sky background
└── App.jsx             – Root component


<hr>
