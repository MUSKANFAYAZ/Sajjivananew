import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Get user's cart
export const getUserCart = async (userId) => {
  try {
    const cartRef = doc(db, 'carts', userId);
    const cartDoc = await getDoc(cartRef);
    
    if (cartDoc.exists()) {
      return cartDoc.data().items || [];
    }
    return [];
  } catch (error) {
    console.error('Error getting user cart:', error);
    throw error;
  }
};

// Update user's cart
export const updateCart = async (userId, items) => {
  try {
    const cartRef = doc(db, 'carts', userId);
    await setDoc(cartRef, { 
      items,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
};

// Add item to cart
export const addToCart = async (userId, product) => {
  try {
    const currentCart = await getUserCart(userId);
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
    let updatedCart;
    if (existingItemIndex >= 0) {
      // Item exists, increment quantity
      updatedCart = currentCart.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // New item
      updatedCart = [...currentCart, { ...product, quantity: 1 }];
    }
    
    await updateCart(userId, updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Remove item from cart
export const removeFromCart = async (userId, productId) => {
  try {
    const currentCart = await getUserCart(userId);
    const updatedCart = currentCart.filter(item => item.id !== productId);
    await updateCart(userId, updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

// Update item quantity
export const updateCartItemQuantity = async (userId, productId, quantity) => {
  try {
    const currentCart = await getUserCart(userId);
    const updatedCart = currentCart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    await updateCart(userId, updatedCart);
    return updatedCart;
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw error;
  }
};

// Clear user's cart
export const clearCart = async (userId) => {
  try {
    await updateCart(userId, []);
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
}; 