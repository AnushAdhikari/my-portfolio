# Anush Adhikari — Portfolio (Redesign)

A modern portfolio built with React, Vite, and Tailwind CSS, redesigned with a dark theme and yellow accent to showcase my projects, skills, education, and experience.


| Library | Version | Use |
|---|---|---|
| React | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | DOM rendering |
| react-scroll | ^1.9.0 | Smooth section navigation |
| react-simple-typewriter | ^5.0.1 | Hero typing animation |
| react-icons | ^5.2.1 | All icons (FaGithub, FaLinkedin, HiOutlineMail, BsFillPersonLinesFill, etc.) |
| Tailwind CSS | ^3.4.4 | Utility-first styling |
| Vite | ^5.3.1 | Build tool (replaces CRA for speed) |


## 📁 Project Structure

```
anush-portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Home.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Education.jsx
        └── Contact.jsx
```

## 🎨 Design Decisions

- **Colour palette**: Dark `#08080c` background, `#facc15` (yellow-400) as the single accent.
- **Dark mode default**: starts dark (matches reference), toggleable via sun/moon button in navbar.
- **Hero buttons**: LinkedIn (blue), GitHub (dark), Email (yellow), Resume (ghost)
- **Typography**: Inter (Google Fonts)
