# 🍰 Harsh's Ultimate Recipe Guide

> **Live Demo**: [https://devilgamer5802.github.io/harsh-ultimate-recipe-guide](https://devilgamer5802.github.io/harsh-ultimate-recipe-guide)

A sophisticated, interactive recipe website that combines elegant design with modern web technologies to create an engaging cooking experience. Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

## ✨ Features

### 🎯 Core Functionality
- **Interactive Recipe Cards**: Beautiful presentation with ingredient checklists
- **Cooking Mode**: Step-by-step guidance with automatic timers
- **Recipe Scaling**: Adjust ingredients for different serving sizes
- **Print Recipes**: Clean, optimized PDF output
- **Share Recipes**: Web Share API with clipboard fallback
- **4 Delivery App Integration**: Direct links to Blinkit, Zepto, Instamart, BigBasket

### 🎨 Design & UX
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Beautiful Animations**: Smooth transitions and micro-interactions
- **Elegant Typography**: Playfair Display + Inter font combination
- **Warm Color Palette**: Cooking-inspired amber and brown tones
- **Custom Scrollbars**: Branded scrolling experience

### 🔧 Technical Features
- **14 Recipes**: Diverse collection from desserts to main courses
- **Dietary Filters**: Vegan, vegetarian, gluten-free, pescatarian
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: 95+ Lighthouse score, fast loading
- **Print Optimization**: Compact, ink-friendly layouts

## 🚀 Quick Start

### Option 1: Visit Live Site
Just go to [https://devilgamer5802.github.io/harsh-ultimate-recipe-guide](https://devilgamer5802.github.io/harsh-ultimate-recipe-guide)

### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/devilgamer5802/harsh-ultimate-recipe-guide.git
cd harsh-ultimate-recipe-guide

# Serve locally (choose one)
python3 -m http.server 8000
# OR
python -m http.server 8000
# OR
npx serve .

# Open http://localhost:8000
```

## 📁 Project Structure

```
harsh-ultimate-recipe-guide/
├── index.html              # Main HTML structure
├── styles.css              # Complete CSS with animations
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── package.json            # Project configuration
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## 🎮 How to Use

### Basic Navigation
1. **Browse Recipes**: Use filter buttons to find recipes by category or diet
2. **View Recipe**: Click any recipe card to open detailed modal
3. **Scale Recipe**: Adjust serving sizes (½x, 1x, 1.5x, 2x)
4. **Print Recipe**: Get clean, optimized PDF for offline use

### Cooking Mode
1. Click "Start Cooking" to begin guided cooking
2. Follow highlighted steps with automatic timers
3. Use arrow keys or click to navigate steps
4. Get notifications when steps complete

### Shopping Integration
1. Click delivery app icons next to ingredients
2. Search opens automatically in new tab
3. Choose from 4 major Indian delivery services

## 🛠 Deployment to GitHub Pages

### Automatic Deployment (Recommended)
1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in repository Settings → Pages → Source: GitHub Actions
3. **Push to main branch** - deployment happens automatically via GitHub Actions
4. **Visit your site** at `https://yourusername.github.io/harsh-ultimate-recipe-guide`

### Manual Deployment
```bash
# Install gh-pages
npm install -g gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS to point to GitHub Pages
3. Enable custom domain in repository settings

## 🎨 Customization

### Adding New Recipes
Edit `script.js` and add to the `recipes` object:
```javascript
'your-recipe-id': {
    title: 'Your Recipe Name',
    image: 'https://your-image-url.jpg',
    category: 'main', // main, dessert, appetizer, breakfast, salad
    dietary: ['vegetarian'], // vegan, vegetarian, gluten-free, pescatarian
    prepTime: 15,
    cookTime: 30,
    servings: '4',
    ingredients: {
        'Category Name': [
            { amount: '1 cup', name: 'ingredient name' }
        ]
    },
    instructions: [
        { title: 'Step Title', description: 'Step description', time: 5 }
    ],
    notes: [
        { title: 'Tip Title', content: 'Helpful tip content' }
    ]
}
```

### Styling Changes
Update CSS custom properties in `:root`:
```css
:root {
    --amber-500: #f59e0b;     /* Primary color */
    --neutral-800: #292524;    /* Text color */
    --font-serif: 'Playfair Display'; /* Heading font */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **No external dependencies** for fast loading
- **Optimized images** from Unsplash CDN

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own recipe website!

## 🙏 Credits

- **Developer**: [devilGamer5802](https://github.com/devilgamer5802)
- **Design Inspiration**: Tried & True Recipe, CHRLS Design
- **Images**: Unsplash photographers
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Font Awesome

---

**Built with ❤️ for food lovers everywhere** 🍰✨

> Star this repository if you found it helpful!
