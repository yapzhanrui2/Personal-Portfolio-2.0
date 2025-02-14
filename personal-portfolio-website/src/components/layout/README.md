# Layout Components

This directory contains layout-related components that define the structure and navigation of the website.

## Components

### Header (`Header.tsx`)
- Main navigation bar
- Responsive mobile menu
- Smooth scroll navigation
- Active section highlighting
- Resume download button
- Glass effect on scroll

### MobileMenu (`MobileMenu.tsx`)
- Responsive mobile navigation
- Animated transitions
- Accessible dialog
- Links with smooth scroll
- Resume download option

### Footer
- Attribution and credits
- Built with information
- Social links
- Design credits

## Features
- Responsive design
- Smooth animations
- Fixed positioning
- Glass morphism effects
- Dark mode support
- Mobile-first approach

## Implementation
- Built with Next.js 14
- Uses Framer Motion for animations
- Headless UI for accessible components
- Tailwind CSS for styling
- TypeScript for type safety

## Usage
Layout components are used in the root layout file:
```tsx
// src/app/layout.tsx
import Header from '@/components/layout/Header';

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## Styling
- Consistent with design system
- Responsive breakpoints
- Dark mode variants
- Smooth transitions
- Accessible focus states 