import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getFeaturedProducts } from '../../services/productService';
import { useCart } from '../../contexts/CartContext';
import { fallbackImages } from '../../assets';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const products = await getFeaturedProducts(8);
      setFeaturedProducts(products);
    } catch (error) {
      console.error('Error loading featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    // Implement wishlist functionality
    console.log('Added to wishlist:', product);
  };

  const categories = [
    {
      name: 'Street Artisans',
      image: '/src/assets/artisans.png',
      fallbackImage: fallbackImages.general,
      description: 'Handcrafted items from traditional street artisans'
    },
    {
      name: 'Idols',
      image: '/src/assets/Marble Ganesh Idol.png',
      fallbackImage: fallbackImages.idol,
      description: 'Beautiful religious idols and spiritual items'
    },
    {
      name: 'Toys',
      image: '/src/assets/baby toys.png',
      fallbackImage: fallbackImages.toy,
      description: 'Traditional handmade toys and games'
    },
  ];

  const handleImageError = (e, fallbackImage) => {
    console.log(`Category image failed to load, using fallback`);
    e.target.src = fallbackImage;
  };

  return (
    <div className="home">
      <Hero />
      
      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Categories</h2>
            <p>Discover unique handmade treasures from different art forms</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={`/products?category=${category.name}`}
                className="category-card"
              >
                <div className="category-image">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    onError={(e) => handleImageError(e, category.fallbackImage)}
                    loading="lazy"
                  />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked items from our talented artisans</p>
          </div>
          
          {loading ? (
            <div className="loading">Loading featured products...</div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          )}
          
          <div className="view-all-container">
            <Link to="/products" className="view-all-btn">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 