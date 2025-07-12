import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getAllProducts, getProductsByCategory, searchProducts, getAllCategories } from '../../services/productService';
import { useCart } from '../../contexts/CartContext';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const { addToCart } = useCart();

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  useEffect(() => {
    loadCategories();
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchTerm(search);
    }
    
    loadProducts(category, search);
  }, [searchParams]);

  const loadCategories = async () => {
    try {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading categories:', error);
      // Fallback categories
      setCategories(['All', 'Street Artisans', 'Idols', 'Murtis', 'Toys', 'Photo']);
    }
  };

  const loadProducts = async (category, search) => {
    setLoading(true);
    try {
      let productsData;
      
      if (search) {
        productsData = await searchProducts(search);
      } else if (category && category !== 'All') {
        productsData = await getProductsByCategory(category);
      } else {
        productsData = await getAllProducts();
      }
      
      setProducts(productsData);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set('search', searchTerm.trim());
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category && category !== 'All') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    params.delete('search');
    setSearchParams(params);
  };

  const handleSortChange = (sortBy) => {
    let sortedProducts = [...products];
    
    switch (sortBy) {
      case 'newest':
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        sortedProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    setProducts(sortedProducts);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    // Implement wishlist functionality
    console.log('Added to wishlist:', product);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover unique handmade treasures from talented artisans</p>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {/* Filters and Search */}
          <div className="products-filters">
            <div className="search-section">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button type="submit" className="search-btn">Search</button>
              </form>
            </div>

            <div className="filters-section">
              <div className="category-filters">
                <h3>Categories</h3>
                <div className="category-buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sort-section">
                <h3>Sort By</h3>
                <select 
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="sort-select"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-section">
            {loading ? (
              <div className="loading">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={`products-grid ${viewMode}`}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 