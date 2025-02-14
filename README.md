# Ray Yap's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and an interactive cursor effect.

## Features

- 🎨 Modern Design with Dark Mode
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth Animations using Framer Motion
- 📱 Fully Responsive Layout
- 💅 Styled with Tailwind CSS
- ⌨️ Interactive Type Animations
- 🖱️ Custom Cursor Effects
- 🎯 SEO Optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Geist Sans & Geist Mono
- **Animation Libraries:**
  - Framer Motion
  - React Type Animation
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/              # Next.js app router files
├── components/       # React components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── sections/    # Page sections (About, Projects, etc.)
│   └── ui/          # Reusable UI components
├── lib/             # Utility functions and hooks
└── styles/          # Global styles and Tailwind config
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio-website.git
```

2. Install dependencies:
```bash
cd personal-portfolio-website
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Update personal information in `src/app/layout.tsx`
2. Modify section content in `src/components/sections/`
3. Add your projects in `src/components/sections/Projects.tsx`
4. Update social links in `src/components/sections/About.tsx`
5. Customize colors and theme in `tailwind.config.ts`

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with default settings

## Credits

- Design inspired by [Brittany Chiang](https://brittanychiang.com)
- Icons from [Heroicons](https://heroicons.com)
- Fonts by [Vercel](https://vercel.com/font)
