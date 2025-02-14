# UI Components

This directory contains reusable UI components that form the building blocks of the portfolio website. These components are designed to be atomic, reusable, and follow a consistent design system.

## Components

### MouseCursor (`MouseCursor.tsx`)
- Custom cursor effect with smooth animation
- Gradient glow that follows mouse movement
- Performance optimized using Framer Motion
- Responsive to window boundaries
- Automatic show/hide on mouse enter/leave

### Button
- Primary and secondary variants
- Hover and focus states
- Accessible keyboard navigation
- Loading states
- Icon support

### Icons
- SVG icons for social media
- Navigation icons
- UI interaction icons
- Consistent styling and scaling

### Typography
- Heading components (h1-h4)
- Body text components
- Mono text components
- Consistent font sizing and spacing

## Features
- Built with TypeScript for type safety
- Framer Motion animations
- Tailwind CSS styling
- Dark mode support
- Responsive design
- Accessibility focused
- Performance optimized

## Usage
Import components as needed:
```tsx
import { MouseCursor } from '@/components/ui/MouseCursor';
```

## Styling
- Uses Tailwind CSS utility classes
- Follows project color scheme
- Consistent spacing and sizing
- Smooth transitions and animations
- Dark mode variants

Components in this directory:
- Card
- Input
- Modal
- Loading states
- Error states 