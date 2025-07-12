import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { 
  getUserCart, 
  addToCart as addToCartService, 
  removeFromCart as removeFromCartService,
  updateCartItemQuantity as updateQuantityService
} from '../services/cartService';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load cart items when user changes
  useEffect(() => {
    if (user) {
      loadCartItems();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const loadCartItems = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const items = await getUserCart(user.uid);
      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    if (!user) {
      // Store in localStorage for non-authenticated users
      const existingCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
      
      let updatedCart;
      if (existingItemIndex >= 0) {
        updatedCart = existingCart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...existingCart, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      return;
    }

    try {
      const updatedCart = await addToCartService(user.uid, product);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    if (!user) {
      const existingCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const updatedCart = existingCart.filter(item => item.id !== productId);
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      return;
    }

    try {
      const updatedCart = await removeFromCartService(user.uid, productId);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;

    if (!user) {
      const existingCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
      const updatedCart = existingCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      return;
    }

    try {
      const updatedCart = await updateQuantityService(user.uid, productId, quantity);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
      throw error;
    }
  };

  const clearCart = () => {
    if (!user) {
      localStorage.removeItem('guestCart');
      setCartItems([]);
      return;
    }

    setCartItems([]);
    // You can also call a service to clear cart in Firebase
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
    getCartTotal,
    loading
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 