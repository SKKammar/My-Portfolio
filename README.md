# Santosh K Kammar's Portfolio

A personal developer portfolio built with **Next.js 15**, **React 19**, and **Tailwind v4**, featuring a premium **Deep Space Glassmorphism** aesthetic and an interactive 3D starfield hero (`react-three-fiber`).

Design identity: dark, cinematic, monochrome — Playfair Display + Inter typography, with smooth Lenis scrolling, custom framer-motion animations, and a recurring glassy, hairline-rule motif throughout the UI.

---

## Features

- **Deep Space 3D Hero** — cinematic parallax scrolling built with `react-three-fiber` and `framer-motion`
- **Premium Motion System** — buttery smooth `Lenis` scrolling with centralized cubic-bezier easing and custom desktop cursors
- **Interactive Case Studies** — projects support advanced layout filtering and detailed modal case studies with data visualizations
- **Fully responsive & Accessible** — full mobile support with respect for OS `prefers-reduced-motion` settings

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS v4, Glassmorphism |
| Motion | Framer Motion, Lenis |
| 3D | react-three-fiber, drei |
| Language | TypeScript |

---

## Folder Structure

```
my-portfolio/
├── app/
│   ├── globals.css             # design tokens (Tailwind v4 @theme)
│   ├── layout.tsx              # fonts + metadata
│   └── page.tsx                # assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Skills.tsx
│   │   ├── GitHub.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Rule.tsx             # the hairline motif
│   │   ├── Tag.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── SpaceBackground.tsx      # 3D starfield background
├── data/projects.ts             # Project data & interface
├── public/images/projects/      # drop project cover images here
└── package.json
```

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/SKKammar/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000`.

---

## Project Workflow (How to Add Projects)

Since this portfolio runs on local data, managing projects is simple:

1. **Add Images**: Drop your project's cover image into the `public/images/projects/` directory.
2. **Update Data**: Open `data/projects.ts` and add a new entry to the `placeholderProjects` array. 
   - Follow the `Project` interface structure.
   - Example:
     ```typescript
     {
       id: 'my-new-project',
       title: 'My New Project',
       subtitle: 'A brief description',
       description: 'Detailed explanation of the project.',
       coverImage: '/images/projects/my-new-project.png',
       technologies: ['Next.js', 'React'],
       liveUrl: 'https://example.com',
       githubUrl: 'https://github.com/username/repo',
       year: 2026,
       featured: true,
       category: 'Full-Stack',
     }
     ```
3. **Save**: The UI will automatically update. Featured projects will appear prominently in the gallery.

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy.

No other config needed — `next.config.ts` and `postcss.config.mjs` are already set up for the build.

---

## License

This project is open for reference and learning. If you're reusing significant chunks of it, a credit back to this repo is appreciated.
