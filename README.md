# Interactive Portfolio

A modern, interactive portfolio website built with React, TypeScript, and CSS animations.

## Features

### 🎯 Interactive Navigation
- **Hero Section**: Clean introduction with "View More" button
- **Progressive Disclosure**: Projects section only appears after clicking "View More"
- **Smooth Scrolling**: Seamless navigation between sections

### 🎨 Visual Design & Animations
- **Parallax Background**: Animated floating elements with different colors
- **Project Slider**: Auto-rotating featured project showcase with navigation
- **Hover Effects**: Interactive cards with smooth transitions
- **Intersection Observer**: Elements animate in as they come into view

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

### 🚀 Project Showcase
- **Featured Slider**: Large project showcase with auto-rotation
- **Technology Tags**: Visual indicators of technologies used
- **Category Labels**: Organized project categorization
- **Image Galleries**: High-quality project previews

## Technologies Used

- **React 19** with TypeScript
- **CSS Animations** and transitions
- **React Scroll** for smooth navigation
- **Intersection Observer API** for scroll animations
- **Responsive Design** with mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing section with "View More" button
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Interactive project showcase
│   └── Contact.tsx       # Contact form
├── App.tsx               # Main app with state management
└── index.css             # Custom CSS utilities and animations
```

## Key Features Explained

### Progressive Disclosure
The portfolio starts with only Hero, About, and Contact sections visible. The Projects section appears dynamically when users click "View More", creating an engaging discovery experience.

### Parallax Animations
Floating background elements with different colors and timing create depth and visual interest without being distracting.

### Project Showcase
- **Auto-rotating slider** with 5-second intervals
- **Manual navigation** with arrow buttons and dot indicators
- **Technology tags** showing the tech stack for each project
- **Category labels** for easy project organization
- **Hover effects** with scale and shadow animations

### Smooth Interactions
- All animations use CSS transitions for performance
- Intersection Observer triggers animations when elements come into view
- Smooth scrolling between sections
- Responsive hover states and interactions

## Customization

### Adding Projects
Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url',
    link: 'project-link',
    technologies: ['React', 'Node.js'],
    category: 'Desktop App'
  }
];
```

### Styling
- Colors and gradients are defined in `src/index.css`
- Animation timings can be adjusted in the CSS classes
- Background elements can be modified in the Projects component

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Intersection Observer API support
- Smooth scrolling support

## Performance

- Optimized images with proper sizing
- CSS animations for smooth performance
- Lazy loading of project images
- Efficient state management with React hooks
