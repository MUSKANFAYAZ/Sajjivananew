// API Service for real-time product fetching with custom artisan products
class ApiService {
  constructor() {
    this.timeout = 10000;
  }

  // Custom product data for street artisans, idols, murtis, toys, and photos
  getCustomProducts() {
    return [
      // Street Artisans Products
      {
        id: "1",
        title: "Handcrafted Clay Pottery Set",
        price: 850,
        description: "Beautiful handcrafted clay pottery set made by traditional street artisans. Perfect for home decoration and daily use.",
        category: "Street Artisans",
        imageURL: "/src/assets/Handcrafted Clay Pottery Set.png",
        rating: 4.8,
        ratingCount: 45,
        featured: true,
        createdAt: "2024-01-15T10:30:00Z",
        inStock: true
      },
      {
        id: "2",
        title: "Traditional Simple Toys",
        price: 450,
        description: "Elegant simple toys by skilled street artisans. Perfect for storage and decoration.",
        category: "Street Artisans",
        imageURL: "/src/assets/wooden item.png",
        rating: 4.6,
        ratingCount: 32,
        featured: false,
        createdAt: "2024-01-14T14:20:00Z",
        inStock: true
      },
      {
        id: "3",
        title: "Handwoven Cotton Shawls",
        price: 1200,
        description: "Soft and warm cotton shawls handwoven by traditional street artisans. Available in various colors.",
        category: "Street Artisans",
        imageURL: "/src/assets/Handwoven Cotton Shawls.png",
        rating: 4.7,
        ratingCount: 28,
        featured: true,
        createdAt: "2024-01-13T09:15:00Z",
        inStock: true
      },
      {
        id: "4",
        title: "Brass Decorative Items",
        price: 1800,
        description: "Exquisite brass decorative items crafted by skilled street artisans. Perfect for home decoration.",
        category: "Street Artisans",
        imageURL: "/src/assets/Brass Decorative Items.png",
        rating: 4.9,
        ratingCount: 56,
        featured: true,
        createdAt: "2024-01-12T16:45:00Z",
        inStock: true
      },

      // Idols Products - Using local assets
      {
        id: "5",
        title: "Marble Ganesh Idol",
        price: 2500,
        description: "Beautiful marble Ganesh idol hand-carved by skilled artisans. Perfect for prayer room decoration.",
        category: "Idols",
        imageURL: "/src/assets/Marble Ganesh Idol.png",
        rating: 4.9,
        ratingCount: 67,
        featured: true,
        createdAt: "2024-01-11T11:30:00Z",
        inStock: true
      },
      {
        id: "6",
        title: "Wooden Birds",
        price: 3200,
        description: "Exquisite wooden birds with detailed carvings. Made from premium teak wood.",
        category: "Toys",
        imageURL: "/src/assets/wooden cock.png",
        rating: 4.8,
        ratingCount: 43,
        featured: false,
        createdAt: "2024-01-10T13:20:00Z",
        inStock: true
      },
      {
        id: "7",
        title: "Stone Durga Idol",
        price: 4200,
        description: "Magnificent stone Durga idol with intricate details. Perfect for festivals and worship.",
        category: "Idols",
        imageURL: "/src/assets/Stone Durga Idol.png",
        rating: 4.7,
        ratingCount: 38,
        featured: true,
        createdAt: "2024-01-09T15:10:00Z",
        inStock: true
      },
      {
        id: "8",
        title: "Soil Pot",
        price: 3800,
        description: "Elegant Soil pot with traditional design.",
        category: "Toys",
        imageURL: "/src/assets/soil pot.png",
        rating: 4.6,
        ratingCount: 29,
        featured: false,
        createdAt: "2024-01-08T10:45:00Z",
        inStock: true
      },
      {
        id: "9",
        title: "Silver Saraswati Idol",
        price: 5500,
        description: "Pure silver Saraswati idol with musical instruments. Symbolizes knowledge and wisdom.",
        category: "Idols",
        imageURL: "/src/assets/Silver Saraswati Idol.png",
        rating: 4.9,
        ratingCount: 78,
        featured: true,
        createdAt: "2024-01-07T12:30:00Z",
        inStock: true
      },
      {
        id: "10",
        title: "Gold Plated Hanuman Idol",
        price: 6800,
        description: "Stunning gold plated Hanuman idol with detailed engravings. Perfect for daily worship.",
        category: "Idols",
        imageURL: "/src/assets/Gold Plated Hanuman Idol.png",
        rating: 4.8,
        ratingCount: 52,
        featured: true,
        createdAt: "2024-01-06T14:15:00Z",
        inStock: true
      },
      {
        id: "12",
        title: "Brass Idol",
        price: 7200,
        description: "Exquisite brass  idol set with detailed carvings. Perfect for home temple.",
        category: "Toys",
        imageURL: "/src/assets/Brass Decorative Items.png",
        rating: 4.9,
        ratingCount: 63,
        featured: true,
        createdAt: "2024-01-04T16:40:00Z",
        inStock: true
      },

      {
        id: "15",
        title: "Bronze Durga with Weapons",
        price: 7800,
        description: "Powerful bronze Durga idol with all weapons. Protects home from negative energies.",
        category: "Idols",
        imageURL: "/src/assets/Stone Durga Idol.png",
        rating: 4.7,
        ratingCount: 54,
        featured: true,
        createdAt: "2024-01-01T10:15:00Z",
        inStock: true
      },
    
      {
        id: "17",
        title: "Wooden Hanuman Chalisa Idol",
        price: 3800,
        description: "Sacred wooden Hanuman idol with Chalisa inscription. Perfect for daily prayers.",
        category: "Idols",
        imageURL: "/src/assets/Gold Plated Hanuman Idol.png",
        rating: 4.6,
        ratingCount: 112,
        featured: false,
        createdAt: "2023-12-30T12:20:00Z",
        inStock: true
      },
      {
        id: "19",
        title: "Brass Saraswati with Veena",
        price: 6800,
        description: "Beautiful brass Saraswati idol with veena. Enhances learning and creativity.",
        category: "Idols",
        imageURL: "/src/assets/Silver Saraswati Idol.png",
        rating: 4.7,
        ratingCount: 45,
        featured: false,
        createdAt: "2023-12-28T09:30:00Z",
        inStock: true
      },

      // Murtis Products - Using local assets
      {
        id: "25",
        title: "Gold Hanuman Murti",
        price: 5500,
        description: "Pure gold Hanuman murti with detailed engravings. Perfect for daily worship and meditation.",
        category: "Murtis",
        imageURL: "/src/assets/Gold Plated Hanuman Idol.png",
        rating: 4.9,
        ratingCount: 78,
        featured: true,
        createdAt: "2024-01-07T12:30:00Z",
        inStock: true
      },
      {
        id: "26",
        title: "Gold Plated Saraswati Murti",
        price: 6800,
        description: "Stunning gold plated Saraswati murti with musical instruments. Symbolizes knowledge and wisdom.",
        category: "Murtis",
        imageURL: "/src/assets/Silver Saraswati Idol.png",
        rating: 4.8,
        ratingCount: 52,
        featured: true,
        createdAt: "2024-01-06T14:15:00Z",
        inStock: true
      },

      // Channapatna Toys Products - Based on https://www.channapatnatoys.co.in/
      {
        id: "29",
        title: "Channapatna Wooden Baby Rattle Toys",
        price: 798,
        description: "Traditional wooden baby rattle toys for infants (0+ Years) - set of 6 pcs. Handcrafted with natural dyes.",
        category: "Toys",
        imageURL: "/src/assets/baby toys.png",
        rating: 4.8,
        ratingCount: 156,
        featured: true,
        createdAt: "2024-01-03T11:25:00Z",
        inStock: true
      },
      {
        id: "30",
        title: "Channapatna Wooden Doughnut Stacking Toy",
        price: 599,
        description: "Organic wooden doughnut stacking toy for kids (1 Year+) - Montessori wooden rainbow stacking toys for toddlers.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Doughnut Stacking Toy.png",
        rating: 4.7,
        ratingCount: 89,
        featured: true,
        createdAt: "2024-01-02T13:50:00Z",
        inStock: true
      },
      {
        id: "31",
        title: "Channapatna Pull Along Wooden Turtle",
        price: 599,
        description: "Premium pull along toy wooden turtle for 12 months+ kids. Multicolor with attached string for easy pulling.",
        category: "Toys",
        imageURL: "/src/assets/Pull Along Toy Wooden Turtle.png",
        rating: 4.6,
        ratingCount: 67,
        featured: false,
        createdAt: "2024-01-01T10:15:00Z",
        inStock: true
      },
      {
        id: "32",
        title: "Channapatna Wooden Bird Whistle Toys",
        price: 499,
        description: "Wooden bird whistle toys for kids (1 Year+) - Set of 4 pcs multicolor. Discover sounds and develop auditory skills.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Bird Whistle Toys.png",
        rating: 4.5,
        ratingCount: 78,
        featured: false,
        createdAt: "2023-12-31T15:30:00Z",
        inStock: true
      },
      {
        id: "33",
        title: "Channapatna Wooden Pen Pencil Stand",
        price: 1399,
        description: "Wooden pen pencil stand holder toys office desktop table organizer 5 inch multicolor pack of 4.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Pen Pencil Stand Holder.png",
        rating: 4.4,
        ratingCount: 45,
        featured: false,
        createdAt: "2023-12-30T12:20:00Z",
        inStock: true
      },
      {
        id: "34",
        title: "Channapatna Wooden Decorative Dolls",
        price: 499,
        description: "Traditional Indian art hand-painted figurines, set of 2. Beautiful decorative dolls for home decoration.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Decorative Dolls.png",
        rating: 4.8,
        ratingCount: 92,
        featured: true,
        createdAt: "2023-12-29T14:45:00Z",
        inStock: true
      },
      {
        id: "35",
        title: "Channapatna Bride and Groom Peg Dolls",
        price: 699,
        description: "Handcrafted wooden bride and groom peg dolls, wedding couple figurines, traditional decorative set.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Bride and Groom Peg Dolls.png",
        rating: 4.7,
        ratingCount: 63,
        featured: false,
        createdAt: "2023-12-28T09:30:00Z",
        inStock: true
      },
      {
        id: "36",
        title: "Channapatna Wooden Slingshot/Gulel",
        price: 379,
        description: "Traditional wooden slingshot/gulel with rubber band for boys (5 years+) - Brown color, outdoor game toy.",
        category: "Toys",
        imageURL: "/src/assets/wooden gulel.png",
        rating: 4.3,
        ratingCount: 34,
        featured: false,
        createdAt: "2023-12-27T16:15:00Z",
        inStock: true
      },
      {
        id: "37",
        title: "Channapatna Wooden Bear Stacking Toy",
        price: 389,
        description: "Wooden bear stacking toy for kids (1.5 Years+) - Multicolor educational stacking blocks.",
        category: "Toys",
        imageURL: "/src/assets/Blocks Set Wooden Toy.png",
        rating: 4.6,
        ratingCount: 56,
        featured: false,
        createdAt: "2023-12-26T11:20:00Z",
        inStock: true
      },
      {
        id: "38",
        title: "Channapatna Wooden Bullock Cart",
        price: 599,
        description: "Walk-a-long pull along toy wooden bullock cart for 12 months & above kids. Traditional Indian toy.",
        category: "Toys",
        imageURL: "/src/assets/Toy Wooden Bullock Cart.png",
        rating: 4.5,
        ratingCount: 42,
        featured: false,
        createdAt: "2023-12-25T13:40:00Z",
        inStock: true
      },
      {
        id: "39",
        title: "Channapatna Wooden Marriage Tabla Set",
        price: 999,
        description: "Indian old traditional wooden marriage tabla set. Perfect for cultural celebrations and music learning.",
        category: "Toys",
        imageURL: "/src/assets/Indian Old Traditional Wooden Marriage Tabla Set.png",
        rating: 4.8,
        ratingCount: 28,
        featured: true,
        createdAt: "2023-12-24T15:10:00Z",
        inStock: true
      },
      {
        id: "40",
        title: "Channapatna Wooden Spring Head Adivasi",
        price: 449,
        description: "Handmade wooden toys for kids handcrafted wooden spring head adivasi couple. Traditional tribal art.",
        category: "Toys",
        imageURL: "/src/assets/Head Adivasi Coup.png",
        rating: 4.4,
        ratingCount: 38,
        featured: false,
        createdAt: "2023-12-23T10:30:00Z",
        inStock: true
      },
      {
        id: "41",
        title: "Channapatna Wooden Pull Along Puppy",
        price: 399,
        description: "Wooden pull along toy puppy for 1 year+ kids. Natural wood color, perfect for toddlers.",
        category: "Toys",
        imageURL: "/src/assets/Toy Puppy.png",
        rating: 4.7,
        ratingCount: 71,
        featured: false,
        createdAt: "2023-12-22T14:20:00Z",
        inStock: true
      },
      {
        id: "42",
        title: "Channapatna Gilli Danda Set",
        price: 379,
        description: "Wooden gilli danda set for kids (5 Years+) - set of 3 pcs. Traditional Indian outdoor action game.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Gilli Danda.png",
        rating: 4.6,
        ratingCount: 49,
        featured: false,
        createdAt: "2023-12-21T11:15:00Z",
        inStock: true
      },
      {
        id: "43",
        title: "Channapatna Wooden Blocks Set",
        price: 399,
        description: "Wooden toy building and stacking counting adding subtracting multiplication indoor game.",
        category: "Toys",
        imageURL: "/src/assets/Blocks Set Wooden Toy.png",
        rating: 4.5,
        ratingCount: 83,
        featured: false,
        createdAt: "2023-12-20T16:30:00Z",
        inStock: true
      },
      {
        id: "44",
        title: "Channapatna Wooden Abacus",
        price: 535,
        description: "Early learning developmental toy - wooden abacus educational toy to build math skills foundation.",
        category: "Toys",
        imageURL: "/src/assets/Wooden Abacus.png",
        rating: 4.8,
        ratingCount: 112,
        featured: true,
        createdAt: "2023-12-19T09:45:00Z",
        inStock: true
      },
    ];
  }

  // Get all products
  async getAllProducts() {
    try {
      // Simulate API delay for realistic experience
      await new Promise(resolve => setTimeout(resolve, 500));
      return this.getCustomProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to load products. Please try again.');
    }
  }

  // Get products by category
  async getProductsByCategory(category) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const allProducts = this.getCustomProducts();
      return allProducts.filter(product => product.category === category);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to load products for this category.');
    }
  }

  // Get product by ID
  async getProductById(id) {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      const allProducts = this.getCustomProducts();
      return allProducts.find(product => product.id === id);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('Failed to load product details.');
    }
  }

  // Get all categories
  async getCategories() {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      return ['All', 'Street Artisans', 'Idols', 'Murtis', 'Toys', 'Photo'];
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to load categories.');
    }
  }

  // Search products
  async searchProducts(searchTerm) {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const allProducts = this.getCustomProducts();
      const searchLower = searchTerm.toLowerCase();
      
      return allProducts.filter(product => 
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    } catch (error) {
      console.error('Error searching products:', error);
      throw new Error('Failed to search products.');
    }
  }

  // Get featured products
  async getFeaturedProducts(limit = 8) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const allProducts = this.getCustomProducts();
      const featured = allProducts.filter(product => product.featured);
      return featured.slice(0, limit);
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw new Error('Failed to load featured products.');
    }
  }

  // Get products with pagination
  async getProductsWithPagination(page = 1, limit = 12) {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const allProducts = this.getCustomProducts();
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      return {
        products: allProducts.slice(startIndex, endIndex),
        total: allProducts.length,
        page,
        totalPages: Math.ceil(allProducts.length / limit),
        hasMore: endIndex < allProducts.length
      };
    } catch (error) {
      console.error('Error fetching products with pagination:', error);
      throw new Error('Failed to load products.');
    }
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 