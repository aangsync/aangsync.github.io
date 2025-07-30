# aangsync Portfolio Website - Prototype Documentation

## Overview

A cloud-themed personal portfolio website built around the username "aangsync" (first initial + last name + asynchronous). Single-page application with smooth anchor navigation, animated cloud background, and dual theme support.

## Core Features

- **Logo Component**: `<aangsync />` styled as a code tag
- **Single Page Layout**: Hero, About, Experience, Projects, Contact sections
- **Animated Cloud Background**: Toggleable ambient cloud movement
- **Theme System**: Light/Dark mode toggle
- **Responsive Design**: Mobile-first approach
- **Smooth Navigation**: Anchor links with scroll behavior

## Design System

### Color Palette (HSL Values)

```scss
// Light Mode
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 200 100% 70%; // Light blue for clouds/accents
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96%;
--secondary-foreground: 222.2 84% 4.9%;
--muted: 210 40% 96%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96%;
--accent-foreground: 222.2 84% 4.9%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 200 100% 70%;

// Dark Mode
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 200 100% 80%; // Lighter blue for dark mode
--primary-foreground: 222.2 84% 4.9%;
--secondary: 217.2 32.6% 17.5%;
--secondary-foreground: 210 40% 98%;
--muted: 217.2 32.6% 17.5%;
--muted-foreground: 215 20.2% 65.1%;
--accent: 217.2 32.6% 17.5%;
--accent-foreground: 210 40% 98%;
--border: 217.2 32.6% 17.5%;
--input: 217.2 32.6% 17.5%;
--ring: 200 100% 80%;
```

### Typography

- **Primary Font**: `font-mono` for logo
- **Body Font**: Default system fonts
- **Logo Glow Effect**: Text shadow using primary color

### Animations

```scss
// Cloud Movement
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-5px);
  }
  75% {
    transform: translateY(-15px) translateX(5px);
  }
}

// Logo Glow
.logo-glow {
  text-shadow: 0 0 20px hsl(var(--primary) / 0.5);
}

// Smooth Transitions
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

## Component Structure

### 1. Header Component

**Props**: `cloudsEnabled: boolean`, `onToggleClouds: function`

- Fixed position with backdrop blur
- Logo (clickable, scrolls to top)
- Navigation menu (desktop only)
- Cloud toggle button
- Theme toggle button

**Navigation Items**:

- About (#about)
- Experience (#experience)
- Projects (#projects)
- Contact (#contact)

### 2. Logo Component (AangsyncLogo)

**Props**: `className?: string`, `size?: 'sm' | 'md' | 'lg'`

- Styled as code tag: `<aangsync />`
- Mono font with glow effect
- Responsive sizing
- Primary color accent

### 3. Cloud Background Component

**Props**: `enabled: boolean`

- Three animated cloud divs
- Different animation delays and speeds
- Only renders when enabled
- CSS-only animations

**Cloud Styles**:

```scss
.cloud {
  position: absolute;
  background: hsl(var(--primary) / 0.1);
  border-radius: 100px;
  animation: float 20s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: hsl(var(--primary) / 0.1);
    border-radius: 100px;
  }
}

.cloud-1 {
  width: 100px;
  height: 40px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.cloud-2 {
  width: 80px;
  height: 30px;
  top: 50%;
  right: 20%;
  animation-delay: 7s;
}

.cloud-3 {
  width: 120px;
  height: 50px;
  bottom: 30%;
  left: 60%;
  animation-delay: 14s;
}
```

### 4. Theme Toggle Component

- Uses Lucide icons (Moon/Sun)
- Stores preference in localStorage
- Toggles `dark` class on document root
- Detects system preference on first visit

### 5. Cloud Toggle Component

**Props**: `enabled: boolean`, `onToggle: function`

- Uses Lucide icons (Cloud/CloudOff)
- Visual feedback for current state

### 6. Section Components

#### Hero Section

- Large logo display
- Tagline/introduction
- Call-to-action buttons
- Background integration with clouds

#### About Section

- Personal introduction
- Skills/technologies
- Professional summary

#### Experience Section

- Work history
- Timeline format
- Technologies used

#### Projects Section

- Portfolio projects
- Links to GitHub/demos
- Technology stack for each

#### Contact Section

- Contact form
- Social links
- Professional email

## State Management

### Theme State

```typescript
interface ThemeState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
```

### Cloud State

```typescript
interface CloudState {
  cloudsEnabled: boolean
  toggleClouds: () => void
}
```

## Local Storage Keys

- `theme`: Stores current theme preference
- `clouds-enabled`: Stores cloud animation preference

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Navigation Behavior

- Smooth scroll to sections
- Fixed header with backdrop blur
- Active section highlighting (optional enhancement)

## Accessibility Features

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support (for animations)

## Performance Considerations

- CSS-only animations for clouds
- Efficient re-renders with proper state management
- Lazy loading for images (if added)
- Optimized bundle size

## Vue/TypeScript/SCSS Migration Notes

### Component Structure

```vue
<template>
  <!-- Component template -->
</template>

<script setup lang="ts">
// Component logic with Composition API
</script>

<style lang="scss" scoped>
// Component styles
</style>
```

### State Management

- Use `ref()` and `reactive()` for local state
- Consider Pinia for global state (theme, clouds)
- `localStorage` integration with composables

### SCSS Structure

```scss
// variables.scss - Design tokens
// mixins.scss - Reusable styles
// animations.scss - Keyframes and transitions
// components/ - Component-specific styles
// layout.scss - Grid and positioning
```

### Recommended Vue Libraries

- **Icons**: `@vueuse/iconify` or `lucide-vue-next`
- **Animations**: Vue transitions or `@vueuse/motion`
- **Utils**: `@vueuse/core` for localStorage, theme detection
- **Styling**: SCSS with CSS modules or styled-components

## File Structure Recommendation

```
src/
├── views/
│   ├── layout/
│   │   ├── Header.vue
│   │   ├── CloudBackground.vue
│   │   └── Logo.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactSection.vue
│   └── ui/
│       ├── ThemeToggle.vue
│       └── CloudToggle.vue
├── composables/
│   ├── useTheme.ts
│   └── useClouds.ts
├── styles/
│   ├── variables.scss
│   ├── mixins.scss
│   ├── animations.scss
│   └── global.scss
└── types/
    └── index.ts
```

This documentation should provide everything needed to recreate the prototype in Vue/TypeScript/SCSS while maintaining the same functionality and visual design.
