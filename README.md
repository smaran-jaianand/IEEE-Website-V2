# IEEE SIT Student Branch Website (v2.0)

Welcome to the official repository for the **IEEE Student Branch of Symbiosis Institute of Technology**. This website serves as the digital face of our student branch, showcasing our technical chapters, events, media, and newsletters.

The project has been completely overhauled (Design 2.0) to feature a premium **Dark/Glass/Neon** aesthetic with interactive 3D elements.

## 🌟 Key Features

*   **Immersive Design**: Dark mode theme with neon accents (IEEE Blue & Symbiosis Red) and glassmorphism.
*   **Interactive 3D Background**: A rotating particle cloud built with `Three.js` that responds to mouse movement (Parallax effect).
*   **Dynamic Society Templates**: A single reusable template system for all 16+ technical societies/chapters.
*   **Vertical Layout**: Clean, scrolling pages for each society (About → Slate → Activities → Gallery).
*   **Responsive Navigation**: A modern "Floating Pill" navbar that adapts to scrolling.
*   **Cinematic Preloader**: A smooth entrance animation simulating system initialization.

---

## 🛠 Tech Stack

This project is built using modern web development tools:

*   **Frontend Framework**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 👨‍💻 Skills Required for Maintenance

To effectively maintain and update this website, a developer should possess the following skills:

### Essential
1.  **React.js**: Strong understanding of Hooks (`useState`, `useEffect`), Components, and Props.
2.  **Tailwind CSS**: Familiarity with utility classes for layout (Flexbox/Grid), spacing, colors, and responsive design (`md:`, `lg:` prefixes).
3.  **JavaScript (ES6+)**: Arrow functions, array methods (`map`, `filter`), and module imports/exports.
4.  **Git**: Basic version control (commit, push, pull, branch management).

### Advanced (For Core Features)
5.  **Three.js / React Three Fiber**: Required if you plan to modify `ThreeBackground.jsx` (the 3D particle system) or add new 3D elements.
6.  **Framer Motion**: Required to tweak the entrance animations, hover effects, or the Preloader.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/ieee-website-v2.git
    cd ieee-website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open your browser to the URL shown (usually `http://localhost:5173`).

---

## 📂 Project Structure

```text
src/
├── assets/            # Static images and SVGs
├── components/        # Reusable UI components
│   ├── Navbar.jsx     # Floating navigation bar
│   ├── Footer.jsx     # Site footer
│   ├── Preloader.jsx  # Initial loading screen
│   └── ThreeBackground.jsx # 3D Particle System
├── data/
│   └── societiesData.js # Configuration for all 16 societies (Name, Colors, IDs)
├── pages/
│   ├── Home.jsx       # Landing page
│   ├── SocietyTemplate.jsx # Dynamic page for individual societies
│   ├── Events.jsx
│   ├── Media.jsx
│   └── Newsletter.jsx
├── App.jsx            # Main application layout & Routing
└── index.css          # Global styles & Tailwind directives
```

## 📝 Customization Guide

### Adding a New Society
1.  Open `src/data/societiesData.js`.
2.  Add a new object to the `societies` array:
    ```javascript
    {
      id: 'new-society',    // URL slug (e.g., /society/new-society)
      name: 'New Society Name',
      shortName: 'NS',
      color: '#FF0000',     // Theme color
      icon: 'IconName'      // Lucide icon name
    }
    ```
3.  The page will be automatically generated!

### Editing Content
*   **Society Info**: Currently using mock data in `SocietyTemplate.jsx`. To fetch real data, you would replace the hardcoded arrays with a database fetch or a JSON import.
*   **Global Styles**: Edit `src/index.css` to change CSS variables for colors (e.g., `--ieee-blue`).

---

**Developed with 💙 by the IEEE SIT Web Team**
