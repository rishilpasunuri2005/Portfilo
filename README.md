# ✦ Rishil Pasunuri — Personal Portfolio

A sleek, editorial-style personal portfolio built using **React** and **Vite**. Inspired by premium, minimalist design aesthetics (like Stelvio / Northside), it features clean typography, a balanced layout, and lightweight performance.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [github.com/rishilpasunuri2005/Portfilo](https://github.com/rishilpasunuri2005/Portfilo)

---

## ✨ Features

- 🏛️ **Editorial Design**: Inspired by premium typography-first Framer templates.
- 🎨 **Sleek Customization**: Built with vanilla CSS and variables for seamless styling.
- 📱 **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- ⚡ **Vite-Powered**: Fast builds and hot module replacement (HMR) for a smooth developer experience.
- 📝 **Modular Codebase**: Every section is an isolated React component with its own stylesheet.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Custom Properties for easy theme configuration)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (UI) & [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Headings) via Google Fonts

---

## 📂 Project Structure

```bash
c:\Users\rishi\OneDrive\Desktop\Portfilo
├── public/              # Static assets (favicons, SVGs, etc.)
└── src/
    ├── components/      # React Sections & Components
    │   ├── About.jsx       # About me section
    │   ├── Contact.jsx     # Contact form or details
    │   ├── Experience.jsx  # Career timeline & education
    │   ├── FAQ.jsx         # Collapsible FAQ accordion
    │   ├── Hero.jsx        # Landing hero introduction
    │   ├── Nav.jsx         # Responsive navigation bar
    │   ├── Projects.jsx    # Projects showcase grid
    │   ├── Skills.jsx      # Skills grid/badges
    │   └── Footer.jsx      # Footer credentials
    ├── styles/
    │   └── global.css   # Main design system, typography, & variables
    ├── App.jsx          # Main page assembly
    └── main.jsx         # React application entry point
```

---

## ⚙️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/rishilpasunuri2005/Portfilo.git
cd Portfilo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view it.

### 4. Build for production
```bash
npm run build
```
This generates a production-ready `dist/` directory that can be served statically.

---

## ✍️ Customizing Content

You can easily customize the text, images, and data inside the portfolio:

1. **Content**: Open the corresponding `.jsx` file inside `src/components/`. At the top of most files, you'll find easy-to-edit JavaScript arrays containing data like project lists, experience entries, and skill lists.
2. **Colors & Themes**: Open [global.css](file:///c:/Users/rishi/OneDrive/Desktop/Portfilo/src/styles/global.css) to adjust the color scheme using the CSS custom properties (`--bg-color`, `--text-color`, etc.).
3. **Typography**: Fonts are loaded via `<link>` tags in [index.html](file:///c:/Users/rishi/OneDrive/Desktop/Portfilo/index.html) and applied in [global.css](file:///c:/Users/rishi/OneDrive/Desktop/Portfilo/src/styles/global.css).

---

## 🌐 Deployment

The build output in `dist/` is completely static and can be deployed to any major hosting platform:

- **Vercel**: Run `vercel` from the project root.
- **Netlify**: Drag and drop the `dist/` folder or link to your GitHub repo.
- **GitHub Pages**: Follow standard procedures for deploying a Vite/React application.

---
Created with 🤍 by [Rishil Pasunuri](https://github.com/rishilpasunuri2005)
