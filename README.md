# Interactive Portfolio (Frontend + Email Backend)

A modern, interactive portfolio built with React + TypeScript and a small Node.js backend to power the Contact form (sends real emails).

Folders:
- Frontend: `src/`
- Backend: `server/`

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

## Getting Started (Step-by-step)

Follow these steps in order. Take your time, each step is simple.

### 1) Install everything

Open a terminal in the project folder and run:

```bash
npm run install-all
```

This installs dependencies for both the frontend and the backend.

### 2) Create your backend environment file

Do NOT share this file. It contains secrets. A safe example file exists at `server/env.example`.

Steps:
1. Open a new terminal and go to the server folder:
   ```bash
   cd server
   ```
2. Copy the example file to create your real env file:
   ```bash
   cp env.example .env
   ```
3. Open `.env` in an editor and fill in the values (use your Gmail and a Gmail App Password). Never commit this file.

Note: `.env` is already ignored by Git.

### 3) Run the backend

In the server folder terminal, start the backend in dev mode:

```bash
npm run dev
```

You should see a message that the server is running on `http://localhost:5000`.

Health check: open this in your browser and confirm you see JSON:

```
http://localhost:5000/api/health
```

### 4) Run the frontend

Open another terminal in the project root (not inside `server`) and run:

```bash
npm start
```

Then open the site at:

```
http://localhost:3000
```

Optional: You can also run both together from the root with:

```bash
npm run dev
```

### 5) Test the Contact form

1. Go to the Contact section
2. Fill in Name, Email, and Message
3. Click Send
4. You should receive an email at your Gmail, and the sender gets a confirmation email

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

Backend files:

```
server/
├── server.js             # Express server (email sending, CORS, rate limit)
├── package.json          # Backend scripts and dependencies
├── env.example           # Template for your private .env
└── README.md             # Backend-specific docs
```

## Key Features Explained

### Progressive Disclosure
The portfolio initially displays the Hero, About, Projects, and Contact sections. The downloadable résumé appears dynamically as users scroll, creating an engaging and interactive discovery experience.

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

### Backend configuration
- Allowed frontend origins are controlled by `FRONTEND_URL` in your `.env`
- Email sending uses your Gmail + App Password (set in `.env`)
- Rate limiting prevents spam (5 requests per 15 minutes)

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Intersection Observer API support
- Smooth scrolling support

## Performance

- Optimized images with proper sizing
- CSS animations for smooth performance
- Lazy loading of project images
- Efficient state management with React hooks

## Troubleshooting (Common issues)

- Network error when submitting the form
  - Make sure the backend is running: `cd server && npm run dev`
  - Check `http://localhost:5000/api/health` in your browser
  - Ensure the `.env` exists in `server/` and is filled with correct values
  - Keep the frontend at `http://localhost:3000` (default)

- Email failed to send
  - Use a Gmail App Password (not your normal password)
  - In Google Account → Security, enable 2‑Step Verification, then create an App Password for Mail
  - Verify `GMAIL_USER` matches your Gmail address

- CORS error in the browser console
  - Set `FRONTEND_URL=http://localhost:3000` in `server/.env`
  - Restart the backend after changing `.env`

- Too many requests
  - Rate limit is 5 requests per 15 minutes per IP. Wait or restart the backend.
