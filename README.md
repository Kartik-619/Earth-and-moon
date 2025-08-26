# 🌌 Interactive 3D Solar System

A beautifully rendered, interactive 3D model of the Earth-Moon system within a vast cosmic scene, built with **React Three Fiber**, **Three.js**, and **React**. Explore space with smooth orbit controls, realistic lighting, and mesmerizing animations — all in your browser!


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
   git clone https://github.com/your-username/Earth-and-moon.git
   cd Earth-and-moo
2.  Install dependencies:

  npm install <br>
3. Start the development server:

 npm run dev

4.Open http://localhost:3000 in your browser.
<hr>

<h3>🗺 Project Structure</h3> <br>
src/ <br>
├── components/
│   ├── Earth.jsx       – Textured rotating Earth <br>
│   ├── Moon.jsx        – Moon with texture and rotation <br>
│   ├── Sun.jsx         – Sun visual + directional light <br>
│   ├── StarBackground.jsx – Full-sky starfield <br>
│   └── canvas.jsx      – Main 3D scene with OrbitControls <br>
├── public/ <br>
│   ├── earth.jpg       – Earth texture <br>
│   ├── moon.jpg        – Moon texture <br>
│   ├── sun.jpg         – Sun texture <br>
│   └── stars.jpg       – Starry sky background <br>
└── App.jsx             – Root component <br>


<hr>
<h3>🎨 Textures & Assets</h3 <br><br>
All planetary textures are sourced from public domain space imagery:<br>
<br>
Earth: NASA Visible Earth<br>
Moon: Solar System Scope<br>
Sun: High-res solar maps<br>
Stars: Equirectangular starfield<br>
All textures are placed in /public for direct access via useTexture.<br><br>
<hr>

<h3>🌟 Future Enhancements</h3>
<br>
 1) Add more planets (Mars, Jupiter, Saturn with rings)
<br>
 2) Implement orbital trails
<br>
 3) Add bloom/glow effects with EffectComposer
<br>
 4) Support VR/AR viewing
<br>
 5) Educational labels and info panels
<br>
 6) Solar eclipse detector UI
<br> <hr>
<h3>🤝 Contributing</h3><br>
Contributions are welcome! Whether you want to improve visuals, add planets, or optimize performance, feel free to open an issue or submit a pull request.
<br>
Fork the project<br>
Create your feature branch (git checkout -b feature/NewPlanet)<br>
Commit your changes (git commit -m 'Add Jupiter')<br>
Push to the branch (git push origin feature/NewPlanet)<br>
Open a Pull Request<br><br>
<hr>
<h3>📄 License</h3><br>
This project is open source and available under the MIT License.<br>
<hr>

<h3>🌌 Final Transmission</h3><br>
“Somewhere, something incredible is waiting to be known.” <br>

This project is a tribute to curiosity, rendered in code.<br>
Fly gently through the void.<br> <br>
And remember: <i>you’re standing on a planet that’s orbiting a star, flying through a galaxy — and you just built a piece of it.</i>
<br><br>
— Mission Control, 2025
