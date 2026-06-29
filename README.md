# Justin Lee | Personal Portfolio Website

A premium, highly interactive personal portfolio website designed for recruitment and showcasing software engineering and AI projects.

## ✨ Features

- **Interactive Glassmorphic UI**: High-fidelity dark mode styling using custom HSL colors, smooth transitions, and premium responsive layout principles.
- **Canvas Particle Network**: Dynamic background connection animation that reacts to mouse movements.
- **Scroll-Triggered Reveals**: Smooth animation reveals using the native `IntersectionObserver` API.
- **Dynamic Project Filtering**: Filter hackathon-winning AI and web projects instantly by category.
- **Fully Responsive**: Optimized experience across mobile, tablet, and desktop viewports.
- **Interactive Contact Form**: Custom-styled form featuring loading states and active toast notifications.
- **Direct Resume Download**: Convenient resume download link in the header and hero sections.

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5
- **Style**: Custom Vanilla CSS3 (featuring HSL variables, grid, flexbox, glassmorphic styling, keyframe animations)
- **Logic**: Vanilla ES6 JavaScript (for animations, canvas, filters, interactive form state)
- **Icons**: [Lucide Icons](https://lucide.dev/)

## 🚀 Running Locally

Since this is a static website, you do not need to install complex dependencies or build tools. You can run it simply by opening `index.html` in any web browser, or by serving it locally.

### Using Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### Using VS Code Live Server:
Right-click on `index.html` and select **"Open with Live Server"**.

## 📁 Repository Structure

```
├── assets/
│   ├── avatar.jpg     # Generated high-tech personal profile avatar
│   └── resume.pdf     # Recruiters download link
├── index.html         # Main page structure with SEO tags
├── style.css          # Design system & responsive layouts
├── script.js          # Interactive UI & Canvas animation
├── .gitignore         # Ignores system/IDE configurations
└── README.md          # Project documentation
```
