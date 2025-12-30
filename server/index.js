const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/app-info', (req, res) => {
  res.json({
    name: 'Tasty Recipes',
    tagline: 'Discover Delicious Recipes Every Day',
    description: `Tasty Recipes is your ultimate kitchen companion! Discover thousands of delicious recipes from around the world, right at your fingertips. Whether you're a beginner cook or a seasoned chef, our app makes cooking easy, fun, and delicious.

Features include:
• 10,000+ curated recipes from professional chefs
• Step-by-step cooking instructions with photos
• Video tutorials for complex techniques
• Personalized meal planning and grocery lists
• Save your favorite recipes for quick access
• Share recipes with friends and family
• Dietary filters (vegan, gluten-free, keto, etc.)
• Nutritional information for every recipe`,
    version: '2.5.0',
    rating: 4.8,
    downloads: '1M+',
    appStoreLink: '#',
    playStoreLink: '#'
  });
});

app.get('/api/screenshots', (req, res) => {
  res.json({
    screenshots: [
      { id: 1, title: 'Home Screen', url: '/images/screenshot1.png' },
      { id: 2, title: 'Recipe Details', url: '/images/screenshot2.png' },
      { id: 3, title: 'Search & Filter', url: '/images/screenshot3.png' },
      { id: 4, title: 'Meal Planner', url: '/images/screenshot4.png' }
    ],
    video: {
      thumbnail: '/images/video-thumbnail.png',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  });
});

app.get('/api/developers', (req, res) => {
  res.json({
    team: [
      { name: 'John Smith', role: 'Lead Developer', avatar: '/images/dev1.png' },
      { name: 'Sarah Johnson', role: 'UI/UX Designer', avatar: '/images/dev2.png' },
      { name: 'Mike Chen', role: 'Backend Developer', avatar: '/images/dev3.png' }
    ],
    company: 'TastyTech Studios',
    website: 'https://tastytech.com',
    email: 'contact@tastytech.com'
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
