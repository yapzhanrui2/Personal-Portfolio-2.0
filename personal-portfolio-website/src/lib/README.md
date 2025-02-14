# Library

This directory contains utility functions, hooks, and shared logic used throughout the application.

## Structure

### Hooks
- Custom React hooks for reusable logic
- Animation hooks
- Scroll and intersection hooks
- Window and viewport hooks
- State management hooks

### Utils
- Helper functions
- Type definitions
- Constants and configurations
- Animation utilities
- String formatting

### Animations
- Framer Motion variants
- Animation configurations
- Transition presets
- Scroll animations

### Types
- TypeScript interfaces
- Type definitions
- Shared types
- Utility types

## Features
- TypeScript support
- Well-documented functions
- Unit tested
- Performance optimized
- Reusable across components

## Usage
Import utilities as needed:
```tsx
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { formatDate } from '@/lib/utils/formatDate';
```

## Best Practices
- Keep functions pure and focused
- Document complex logic
- Use TypeScript for type safety
- Write unit tests for critical functions
- Follow consistent naming conventions
- Optimize for tree-shaking 