import apiService from './apiService';

// Get all products from API
export const getAllProducts = async () => {
  try {
    return await apiService.getAllProducts();
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Get product by ID from API
export const getProductById = async (productId) => {
  try {
    return await apiService.getProductById(productId);
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

// Get products by category from API
export const getProductsByCategory = async (category) => {
  try {
    return await apiService.getProductsByCategory(category);
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
};

// Search products using API
export const searchProducts = async (searchTerm) => {
  try {
    return await apiService.searchProducts(searchTerm);
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

// Get featured products from API
export const getFeaturedProducts = async (limitCount = 8) => {
  try {
    return await apiService.getFeaturedProducts(limitCount);
  } catch (error) {
    console.error('Error getting featured products:', error);
    throw error;
  }
};

// Get products with pagination from API
export const getProductsWithPagination = async (page = 1, pageSize = 12) => {
  try {
    return await apiService.getProductsWithPagination(page, pageSize);
  } catch (error) {
    console.error('Error getting products with pagination:', error);
    throw error;
  }
};

// Get all categories from API
export const getAllCategories = async () => {
  try {
    return await apiService.getCategories();
  } catch (error) {
    console.error('Error getting categories:', error);
    throw error;
  }
}; 