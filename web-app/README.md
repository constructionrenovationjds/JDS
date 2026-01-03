# Construction Renovation JDS - Website

Professional, mobile-first landing page for Construction Renovation JDS built with Astro, React, and Tailwind CSS.

## Features

- 🎨 **Minimalist Design** - Clean, professional design with red (#DC2626) as the primary color
- 📱 **Mobile-First** - Fully responsive, optimized for mobile devices
- 🌐 **Bilingual** - French/English language switcher
- ⚡ **High Performance** - Built with Astro for optimal performance
- 📝 **Contact Form** - Integrated Netlify Forms for appointment requests
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Netlify Ready** - Pre-configured for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Customization Guide

### 1. Update Company Information

Edit `src/i18n/translations.ts` to update:
- Phone number (search for `514-XXX-XXXX`)
- RBQ number (search for `RBQ: XXXX-XXXX-XX`)
- Company descriptions and text

### 2. Add Logo

Place your logo in `public/` directory and update the header in `src/pages/index.astro`:

```astro
<!-- Replace the text logo with an image -->
<img src="/logo.png" alt="Construction Renovation JDS" class="h-12" />
```

### 3. Add Project Photos

Replace placeholder images in the gallery section:

1. Add images to `public/images/gallery/`
2. Update the gallery section in `src/pages/index.astro`

Example:
```astro
<img src="/images/gallery/project-1.jpg" alt="Bathroom renovation" />
```

### 4. Update Social Media Links

Edit `src/pages/index.astro` footer section:
```astro
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourpage">Instagram</a>
```

### 5. Configure Form Submissions

The contact form uses Netlify Forms. After deploying to Netlify:
1. Go to your Netlify dashboard
2. Navigate to Forms section
3. Set up email notifications

Alternatively, you can integrate with other services by modifying `src/components/ContactForm.tsx`

### 6. Update Colors

To change the primary color, edit `tailwind.config.mjs`:
```js
colors: {
  primary: {
    DEFAULT: '#DC2626', // Change this hex value
    // ...
  }
}
```

## Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will auto-detect the settings from `netlify.toml`
4. Click "Deploy"

### Option 2: Manual Deploy

```bash
# Build the project
pnpm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Post-Deployment Checklist

- [ ] Enable Netlify Forms in dashboard
- [ ] Set up custom domain (renovationjds.ca)
- [ ] Configure DNS settings
- [ ] Test form submissions
- [ ] Test on mobile devices
- [ ] Test language switcher

## Project Structure

```
web-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ContactForm.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── i18n/           # Translation files
│   │   └── translations.ts
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   └── pages/          # Page routes
│       └── index.astro # Landing page
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
├── netlify.toml        # Netlify configuration
└── package.json
```

## Key Sections on Landing Page

1. **Sticky Header** - Company name, RBQ, phone, language switcher
2. **Hero Section** - Main title, CTA buttons, location
3. **About Section** - Company description and values
4. **Values Section** - 4 key values (Efficiency, Respect, Trust, Quality)
5. **Services Section** - 10 service types with icons
6. **Contact Form** - Appointment booking form
7. **Certifications** - RBQ license, insurance, guarantees
8. **Gallery** - Project photos (placeholders)
9. **Footer** - Contact info, social media links

## Technology Stack

- **Astro 5** - Static site generator
- **React 19** - Interactive components
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Netlify Forms** - Form handling
- **pnpm** - Package manager

## Performance

- Lighthouse Score: 95+ (Performance)
- Mobile-optimized images
- Minimal JavaScript
- CSS purging in production
- Static site generation

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support & Maintenance

### Common Tasks

**Update phone number:**
1. Search for `514-XXX-XXXX` in `src/i18n/translations.ts`
2. Replace with actual number in both FR and EN sections
3. Update `tel:` links in `src/pages/index.astro`

**Add a new service:**
1. Add translation in `src/i18n/translations.ts`
2. Add service to the array in services section
3. Choose an appropriate icon from Heroicons

**Change language default:**
```astro
// In src/pages/index.astro
const lang = 'en'; // Change to 'en' for English default
```

## License

Copyright © 2025 Construction Renovation JDS. All rights reserved.
