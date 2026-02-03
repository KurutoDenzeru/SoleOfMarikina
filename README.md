![SoleOfMarikina](public/OpenGraph.webp)

🌐 Dynamic portfolio showcasing projects, skills and expertise, powered by Astro, Tailwind, shadcn/ui, TypeScript, MDX, RSS, and React for seamless content management.

## ☁️ Deploy your own

[![Deploy with Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/KurutoDenzeru/SoleOfMarikina)  [![Deploy with Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KurutoDenzeru/SoleOfMarikina)

## ✨ Features

- **Interactive Portfolio** — Showcase your work, projects, and professional accomplishments in an engaging way.
- **Responsive Design** — Optimized for all devices, from mobile to desktop.
- **Dark/Light Mode** — Seamless theme switching with user preference persistence.
- **Search Functionality** — Quickly find projects and work experiences with a built-in search bar.
- **Content Collections** — Easily manage and update projects and work experiences using Markdown files.
- **Fast Performance** — Built with Astro for lightning-fast static site generation.
- **Accessible UI** — Components from Shadcn UI ensure a11y compliance and great UX.
- **Open Source** — MIT licensed; customize and deploy your own version freely.

## 🧱 Tech Stack

- [Astro](https://astro.build/): Modern static site generator for building fast, content-focused websites.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [Shadcn UI](https://ui.shadcn.com/): Re-usable components built using Radix UI and Tailwind CSS.
- [TypeScript](https://www.typescriptlang.org/): Strongly typed programming language that builds on JavaScript.

## ⚡ Getting Started

Clone the repo, install deps, and boot the dev server:

```bash
git clone https://github.com/KurutoDenzeru/SoleOfMarikina.git
cd SoleOfMarikina
bun install
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the app.

## 📦 Build for Production

```bash
bun run build
bun start
```

## 🗂️ Configuration

The editor is componentized under `src/components`. Key areas to customize are:

```text
src/                        # Source directory for the Astro project
  layouts/                  # Astro layout components for structuring pages
  pages/                    # Page routes and endpoints
    index.astro             # Homepage
    projects/               # Projects listing and individual project pages
    work/                   # Work experiences listing
  content/                  # Content collections for dynamic content
    config.ts               # Content collection configuration
    projects/               # Markdown files for projects
    work/                   # Markdown files for work experiences
public/                     # Static assets served directly
  icons/                    # Favicon and app icons
  js/                       # Client-side JavaScript files
    theme.js                # Theme switching logic
    drawer.js               # Mobile drawer functionality
    animate.js              # Animation scripts
```

## 🤝🏻 Contributing

Contributions are always welcome, whether you’re fixing bugs, improving docs, or shipping new features that make the project better for everyone.

Check out [Contributing.md](Contributing) to learn how to get started and follow the recommended workflow.

<!-- Please adhere to this project's `Code of Conduct`. -->

## ⚖️ License

This project is released into the public domain and is provided as-is, without warranty. You are free to use, modify, distribute, and do whatever you want with the code, with no restrictions.

For the full legal text, see the [Unlicensed](LICENSE) file.
