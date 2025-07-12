// Import all idol and toy images
// Note: You'll need to add your images to the assets folder with these names

// Idol images (1-20)
export const idolImages = {
  idol1: '/src/assets/idol1.jpg',
  idol2: '/src/assets/idol2.jpg',
  idol3: '/src/assets/idol3.jpg',
  idol4: '/src/assets/idol4.jpg',
  idol5: '/src/assets/idol5.jpg',
  idol6: '/src/assets/idol6.jpg',
  idol7: '/src/assets/idol7.jpg',
  idol8: '/src/assets/idol8.jpg',
  idol9: '/src/assets/idol9.jpg',
  idol10: '/src/assets/idol10.jpg',
  idol11: '/src/assets/idol11.jpg',
  idol12: '/src/assets/idol12.jpg',
  idol13: '/src/assets/idol13.jpg',
  idol14: '/src/assets/idol14.jpg',
  idol15: '/src/assets/idol15.jpg',
  idol16: '/src/assets/idol16.jpg',
  idol17: '/src/assets/idol17.jpg',
  idol18: '/src/assets/idol18.jpg',
  idol19: '/src/assets/idol19.jpg',
  idol20: '/src/assets/idol20.jpg',
};

// Channapatna Toy images (1-16)
export const toyImages = {
  toy1: '/src/assets/toy1.jpg',
  toy2: '/src/assets/toy2.jpg',
  toy3: '/src/assets/toy3.jpg',
  toy4: '/src/assets/toy4.jpg',
  toy5: '/src/assets/toy5.jpg',
  toy6: '/src/assets/toy6.jpg',
  toy7: '/src/assets/toy7.jpg',
  toy8: '/src/assets/toy8.jpg',
  toy9: '/src/assets/toy9.jpg',
  toy10: '/src/assets/toy10.jpg',
  toy11: '/src/assets/toy11.jpg',
  toy12: '/src/assets/toy12.jpg',
  toy13: '/src/assets/toy13.jpg',
  toy14: '/src/assets/toy14.jpg',
  toy15: '/src/assets/toy15.jpg',
  toy16: '/src/assets/toy16.jpg',
};

// Category images for home page
export const categoryImages = {
  artisan1: '/src/assets/artisan1.jpg',
  photo1: '/src/assets/photo1.jpg',
};

// Fallback images for missing content
export const fallbackImages = {
  idol: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  toy: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  general: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
};

// Helper function to get idol image
export const getIdolImage = (idolNumber) => {
  const imageKey = `idol${idolNumber}`;
  return idolImages[imageKey] || fallbackImages.idol;
};

// Helper function to get toy image
export const getToyImage = (toyNumber) => {
  const imageKey = `toy${toyNumber}`;
  return toyImages[imageKey] || fallbackImages.toy;
};

// Helper function to get category image
export const getCategoryImage = (categoryName) => {
  const imageKey = categoryName.toLowerCase().replace(' ', '');
  return categoryImages[imageKey] || fallbackImages.general;
};

// All available images
export const allImages = {
  ...idolImages,
  ...toyImages,
  ...categoryImages,
  ...fallbackImages
}; 