# Legacy Global Foundation Website

A React application built with TypeScript and Sass for the Legacy Global Foundation website.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header/          # Header component with navigation
│   │   ├── Header.tsx
│   │   ├── Header.types.ts
│   │   └── index.ts
│   └── Navigation/      # Navigation component
│       ├── Navigation.tsx
│       ├── Navigation.types.ts
│       └── index.ts
├── styles/              # Sass styling system
│   ├── abstracts/       # Variables, mixins, functions
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _index.scss
│   ├── base/           # Reset, base styles, utilities
│   │   ├── _reset.scss
│   │   ├── _utilities.scss
│   │   └── _index.scss
│   ├── components/     # Component-specific styles
│   │   ├── _header.scss
│   │   ├── _navigation.scss
│   │   └── _index.scss
│   └── main.scss       # Main stylesheet
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## 🎨 Design System

### Colors

- **Primary Accent**: `#FF8800` (Vibrant Orange)
- **Secondary Accent**: `#4C2A70` (Deep Purple)
- **Background**: `#FDFBF8` (Warm Cream)
- **Text**: `#36332C` (Rich Dark Brown)
- **Header**: `#1A1A1A` (Sophisticated Dark)

### Typography

- **Font Family**: Poppins (loaded from Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Features

- Fully responsive design
- Mobile-first approach
- Accessible navigation with ARIA labels
- Smooth scrolling between sections
- Sophisticated card effects with hover animations
- Mobile hamburger menu

## 🛠 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint errors automatically

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: ≥ 1280px

## 🎯 Features

### Header & Navigation

- Fixed header with dark background
- Logo with orange accent color
- Desktop horizontal navigation
- Mobile hamburger menu
- Smooth scroll to sections
- Active section highlighting

### Sections

- Hero section with tagline
- Mission/Story section
- Two focus section (Basic Needs & Forward Tools)
- Partnership section
- Contact section

### Accessibility

- Skip to main content link
- Proper ARIA labels
- Focus management
- Screen reader support

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 📄 License

This project is private and proprietary to the Legacy Global Foundation.
