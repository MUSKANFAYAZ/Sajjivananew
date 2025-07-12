# Saajivana - Handcrafted E-commerce Platform

A modern e-commerce platform built with React, Vite, and Firebase, designed to showcase and sell handcrafted products from local artisans.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Product Catalog**: Browse products by category with search and filtering
- **Shopping Cart**: Real-time cart management with Firebase integration
- **User Authentication**: Secure login/signup with Firebase Auth
- **Product Management**: Add, edit, and manage products through Firebase Firestore
- **Cultural Design**: Beautiful Indian-inspired design with traditional color schemes

### Technical Features
- **React 19**: Latest React with modern hooks and patterns
- **Vite**: Fast development and build tooling
- **Firebase Integration**: 
  - Firestore for product data
  - Authentication for user management
  - Real-time cart synchronization
- **Responsive Grid Layout**: CSS Grid and Flexbox for modern layouts
- **Component Architecture**: Modular, reusable components
- **Context API**: State management for cart and authentication

## 📁 Project Structure

```
Sajjivana/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header/         # Header with contact info
│   │   ├── Navbar/         # Navigation bar
│   │   ├── Hero/           # Hero carousel section
│   │   ├── ProductCard/    # Product display card
│   │   ├── Cart/           # Shopping cart component
│   │   └── Footer/         # Footer with links
│   ├── pages/              # Page components
│   │   ├── Home/           # Homepage with featured products
│   │   ├── Products/       # Product catalog with filters
│   │   ├── Auth/           # Login/signup page
│   │   ├── About/          # About us page
│   │   └── Contact/        # Contact page with form
│   ├── contexts/           # React Context providers
│   │   ├── AuthContext.jsx # Authentication state
│   │   └── CartContext.jsx # Shopping cart state
│   ├── services/           # Firebase services
│   │   ├── cartService.js  # Cart operations
│   │   └── productService.js # Product operations
│   ├── firebase/           # Firebase configuration
│   │   └── config.js       # Firebase setup
│   └── App.jsx             # Main app component
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### 1. Clone and Install Dependencies
```bash
cd Sajjivana
npm install
```

### 2. Firebase Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create Firestore database
5. Get your Firebase configuration

#### Configure Firebase
1. Update `src/firebase/config.js` with your Firebase credentials:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

#### Firestore Collections
Create the following collections in Firestore:

**Products Collection:**
```javascript
{
  title: "Handcrafted Pottery Vase",
  price: 1500,
  imageURL: "https://example.com/image.jpg",
  description: "Beautiful handcrafted pottery vase...",
  category: "Pottery",
  featured: true,
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

**Carts Collection:**
```javascript
{
  userId: "user123",
  items: [
    {
      id: "product123",
      title: "Product Name",
      price: 1500,
      quantity: 2,
      imageURL: "https://example.com/image.jpg"
    }
  ],
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 3. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Design System

### Color Palette
- **Primary**: #8B4513 (Saddle Brown)
- **Secondary**: #D2691E (Chocolate)
- **Accent**: #CD853F (Peru)
- **Gold**: #FFD700 (Gold)
- **Background**: #f8f9fa (Light Gray)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Components
- **Cards**: Glassmorphism effect with subtle shadows
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean, accessible form design
- **Navigation**: Sticky navigation with smooth transitions

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Firebase Hosting
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase Hosting:
```bash
firebase init hosting
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Alternative Deployment
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 🔒 Security Features

- **Firebase Security Rules**: Configure Firestore security rules
- **Input Validation**: Form validation and sanitization
- **Authentication**: Secure user authentication flow
- **CORS**: Proper CORS configuration for API calls

## 📊 Performance Optimization

- **Code Splitting**: React.lazy for route-based splitting
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Optimization**: Vite's built-in optimizations
- **Caching**: Firebase caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@saajivana.com
- Phone: +91 98765 43210
- Website: https://saajivana.com

## 🔮 Future Enhancements

- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Admin dashboard for product management
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Advanced search with filters
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Social media integration

---

**Built with ❤️ for supporting local artisans and preserving traditional crafts.**
