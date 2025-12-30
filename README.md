# Flavor Fiesta 🍳

A beautiful and modern recipe discovery web application built with React. Flavor Fiesta is your ultimate kitchen companion, helping you discover, organize, and cook delicious recipes from around the world.

## 🌟 Features

- **Browse & Search Recipes** - Easily find recipes by name, ingredients, or cuisine type
- **Add Custom Recipes** - Create and save your own custom recipes to your collection
- **Cooking Checklists** - Create step-by-step cooking checklists for organized meal prep
- **Built-in Timer** - Never overcook again with our built-in cooking timer
- **Cooking Reminders** - Get notifications for cooking reminders and timers
- **User Authentication** - Secure sign up and login to protect your recipes
- **Cloud Sync** - Sync your recipes across devices with Firebase
- **Theme Support** - Switch between light and dark mode for comfortable viewing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Noureqo1/Flavor_Fiesta_Website.git
   cd Flavor_Fiesta_Website
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
Flavor_Fiesta_Website/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── assets/           # Images and animations
│   │   ├── App.js           # Main App component
│   │   └── index.js         # Entry point
│   ├── public/              # Static files
│   ├── package.json         # Dependencies
│   ├── netlify.toml         # Netlify configuration
│   └── _redirects           # SPA routing configuration
├── server/                   # Express backend (optional)
│   └── index.js            # Server configuration
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT License
└── README.md              # This file
```

## 🛠️ Available Scripts

In the `client` directory:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## 📦 Build for Production

```bash
cd client
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Drag & Drop
1. Visit [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag and drop the `client/build` folder onto Netlify
4. Your site is live!

#### Option 2: Git Integration
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
4. Deploy!

### Environment Variables
No environment variables required for the static deployment. All configuration is hardcoded in components.

## 👥 Team

Flavor Fiesta was created by a team of dedicated Fullstack Mobile Developers:

- **Nour Eldin Mohamed** - [GitHub](https://github.com/Noureqo1)
- **Rana Hazem Almahdy** - [GitHub](https://github.com/rana7azem)
- **Wafaa Abdulrazek** - [GitHub](https://github.com/wafaaabdulrazek)
- **Hala Mohamed Salah** - [GitHub](https://github.com/HalaMohamed1)

## 🔗 Links

- **YouTube Demo**: [Watch on YouTube](https://youtube.com/shorts/ipG1hKtvILw)
- **Android APK**: [Download APK](https://drive.usercontent.google.com/download?id=1bKssqRRi11Ld7-wMK9sLWzPdOrg73U0R&export=download&authuser=0)
- **Repository**: [GitHub](https://github.com/Noureqo1/Flavor_Fiesta_Website)

## 📚 Technologies Used

### Frontend
- **React** - JavaScript UI library
- **React Icons** - Icon library
- **Lottie** - Animation library
- **CSS3** - Styling

### Build Tools
- **React Scripts** - Create React App build tool
- **Babel** - JavaScript compiler
- **Webpack** - Module bundler

## 🎨 Design Highlights

- **Modern UI/UX** - Clean, intuitive interface with smooth interactions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Gradient Colors** - Beautiful orange and peach gradient theme
- **Smooth Animations** - Floating cards and transitions for enhanced UX
- **Accessible** - WCAG compliant with proper ARIA labels

## 📱 Features by Section

### Hero Section
- App showcase with phone mockup
- Cooking animation
- Download buttons (iOS & Android)
- App icon and branding

### Features Section
- 8 key features displayed in a grid layout
- Icon-based feature cards
- Hover animations

### Screenshots Section
- Carousel with app screenshots
- Navigation buttons
- Thumbnail grid preview

### Video Section
- YouTube video player
- Play button overlay
- Custom video thumbnail

### Download Section
- Store download buttons
- App version information
- QR code placeholder
- Download benefits list

### Developers Section
- Team member cards
- GitHub links
- Centered 4-column grid layout
- Responsive grid for smaller screens

### Footer
- App branding
- Quick links
- Developer profiles with GitHub links
- Copyright information

## 🐛 Known Issues

- Backend API endpoints are not required for production deployment
- The app uses hardcoded values, perfect for a static website

## 🚀 Future Enhancements

- [ ] Backend API integration for dynamic content
- [ ] User authentication system
- [ ] Recipe database with search functionality
- [ ] Mobile app versions (iOS & Android)
- [ ] Dark mode theme
- [ ] Social sharing features
- [ ] Recipe ratings and reviews

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Support

For questions, suggestions, or issues:
- Open an issue on [GitHub](https://github.com/Noureqo1/Flavor_Fiesta_Website/issues)
- Reach out to any of the team members

## 📄 Credits

- **Design Inspiration**: Modern food & recipe apps
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Lottie](https://lottiefiles.com/)
- **Hosting**: [Netlify](https://netlify.com)

---

**Made with ❤️ by the Flavor Fiesta Team**

Happy Cooking! 🍽️
