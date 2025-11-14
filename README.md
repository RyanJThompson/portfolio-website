# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Material UI.

## Features

- 🎨 Modern and clean design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Built with Vite for lightning-fast development
- 🎯 TypeScript for type safety
- 💅 Material UI components for a polished look
- 🔗 Smooth scrolling navigation

## Sections

- **Hero** - Eye-catching landing section with introduction
- **About** - Personal highlights and strengths
- **Skills** - Technology stack and expertise
- **Projects** - Showcase of featured work
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. The deployment happens automatically when you push to the `main` branch.

### Setup Instructions

1. Go to your GitHub repository settings
2. Navigate to **Pages** under **Code and automation**
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
4. Push to the `main` branch to trigger the deployment

The site will be available at: `https://captainlevir.github.io/portfolio-website/`

### Manual Deployment

If you need to manually trigger a deployment:
1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Customization

To personalize this portfolio:

1. **Update personal information** in `src/components/Hero.tsx`
2. **Modify skills** in `src/components/Skills.tsx`
3. **Add your projects** in `src/components/Projects.tsx`
4. **Update contact links** in `src/components/Contact.tsx`
5. **Change colors** in the theme configuration in `src/App.tsx`

## Technologies Used

- React 18
- TypeScript
- Vite
- Material UI
- Emotion (for styling)

## License

MIT License - feel free to use this template for your own portfolio!
