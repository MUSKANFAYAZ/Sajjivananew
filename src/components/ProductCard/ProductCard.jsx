import React, { useState } from 'react';
import { ShoppingCart, Heart, Check } from 'lucide-react';
import { fallbackImages } from '../../assets';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const { id, title, price, imageURL, description, category } = product;
  const [imageError, setImageError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    
    // Show a simple notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `${title} added to cart!`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #38a169;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
  };

  const handleImageError = (e) => {
    console.log(`Image failed to load: ${imageURL}, using fallback`);
    setImageError(true);
    
    // Use appropriate fallback based on category
    let fallbackImage = fallbackImages.general;
    if (category === 'Idols' || category === 'Murtis') {
      fallbackImage = fallbackImages.idol;
    } else if (category === 'Toys') {
      fallbackImage = fallbackImages.toy;
    }
    
    e.target.src = fallbackImage;
  };

  const getImageSrc = () => {
    if (imageError) {
      let fallbackImage = fallbackImages.general;
      if (category === 'Idols' || category === 'Murtis') {
        fallbackImage = fallbackImages.idol;
      } else if (category === 'Toys') {
        fallbackImage = fallbackImages.toy;
      }
      return fallbackImage;
    }
    return imageURL;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={getImageSrc()} 
          alt={title} 
          className="product-image"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="product-overlay">
          <button 
            className="wishlist-btn"
            onClick={handleAddToWishlist}
            aria-label="Add to wishlist"
          >
            <Heart size={20} />
          </button>
        </div>
        <div className="product-category">{category}</div>
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">
          {description?.length > 100 
            ? `${description.substring(0, 100)}...` 
            : description
          }
        </p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="currency">₹</span>
            <span className="amount">{price.toLocaleString()}</span>
          </div>
          
          <button 
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? (
              <>
                <Check size={16} />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 