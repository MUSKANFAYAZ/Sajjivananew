# Images Setup Guide for Sajjivana

## 📁 **How to Add Your Images**

### **Step 1: Prepare Your Images**
- **Idol Images:** 20 high-quality idol photos
- **Toy Images:** 16 Channapatna toy photos
- **Category Images:** 2 category photos for home page
- **Format:** JPG or PNG
- **Size:** 400x400 pixels or larger
- **File Size:** Keep under 500KB each

### **Step 2: Add Images to Assets Folder**
1. Navigate to: `Sajjivana/src/assets/`
2. Add your images with these exact names:

#### **Idol Images (20 files):**
- `idol1.jpg` - Marble Ganesh Idol
- `idol2.jpg` - Wooden Krishna Idol
- `idol3.jpg` - Stone Durga Idol
- `idol4.jpg` - Bronze Lakshmi Idol
- `idol5.jpg` - Silver Saraswati Idol
- `idol6.jpg` - Gold Plated Hanuman Idol
- `idol7.jpg` - Copper Shiva Idol
- `idol8.jpg` - Brass Ram-Sita Idol
- `idol9.jpg` - Marble Radha-Krishna Idol
- `idol10.jpg` - Stone Ganesh Family Idol
- `idol11.jpg` - Bronze Durga with Weapons
- `idol12.jpg` - Silver Lakshmi-Ganesh Idol
- `idol13.jpg` - Wooden Hanuman Chalisa Idol
- `idol14.jpg` - Stone Krishna with Flute
- `idol15.jpg` - Brass Saraswati with Veena
- `idol16.jpg` - Marble Shiva Lingam
- `idol17.jpg` - Gold Plated Ganesh Idol
- `idol18.jpg` - Silver Durga Mahishasura Mardini
- `idol19.jpg` - Bronze Krishna with Cows
- `idol20.jpg` - Stone Lakshmi with Elephants

#### **Channapatna Toy Images (16 files):**
- `toy1.jpg` - Wooden Baby Rattle Toys
- `toy2.jpg` - Wooden Doughnut Stacking Toy
- `toy3.jpg` - Pull Along Wooden Turtle
- `toy4.jpg` - Wooden Bird Whistle Toys
- `toy5.jpg` - Wooden Pen Pencil Stand
- `toy6.jpg` - Wooden Decorative Dolls
- `toy7.jpg` - Bride and Groom Peg Dolls
- `toy8.jpg` - Wooden Slingshot/Gulel
- `toy9.jpg` - Wooden Bear Stacking Toy
- `toy10.jpg` - Wooden Bullock Cart
- `toy11.jpg` - Wooden Marriage Tabla Set
- `toy12.jpg` - Wooden Spring Head Adivasi
- `toy13.jpg` - Wooden Pull Along Puppy
- `toy14.jpg` - Gilli Danda Set
- `toy15.jpg` - Wooden Blocks Set
- `toy16.jpg` - Wooden Abacus

#### **Category Images (2 files):**
- `artisan1.jpg` - Street Artisans category image
- `photo1.jpg` - Photo Services category image

### **Step 3: Image Naming Convention**
- Use lowercase letters
- Use numbers 1-20 for idols, 1-16 for toys
- Use descriptive names for categories
- Use `.jpg` extension (or `.png` if preferred)
- No spaces or special characters

## 🎯 **Product Categories**

### **Idols Category (20 products):**
- Products 1-20 will use `idol1.jpg` to `idol20.jpg`
- Price range: ₹2,500 - ₹12,000

### **Murtis Category (4 products):**
- Products 21-24 will use `idol1.jpg` to `idol4.jpg` (reused)
- Price range: ₹4,800 - ₹7,200

### **Toys Category (16 products):**
- Products 25-40 will use `toy1.jpg` to `toy16.jpg`
- Price range: ₹379 - ₹1,399
- All authentic Channapatna toys from Karnataka

### **Street Artisans (4 products):**
- Using external images
- Price range: ₹450 - ₹1,800

### **Photo Services (4 products):**
- Using external images
- Price range: ₹800 - ₹2,000

## 🏠 **Home Page Category Cards**

### **Category Card Images:**
- **Street Artisans:** `artisan1.jpg` (local image)
- **Idols:** `idol1.jpg` (reused from idol products)
- **Murtis:** `idol2.jpg` (reused from idol products)
- **Toys:** `toy1.jpg` (reused from toy products)
- **Photo:** `photo1.jpg` (local image)

### **Fallback System:**
- **Idols/Murtis:** Fallback to idol-themed image
- **Toys:** Fallback to toy-themed image
- **Artisans/Photo:** Fallback to general product image
- Check browser console for any image loading errors

## 📝 **Example File Structure**
```
Sajjivana/
├── src/
│   ├── assets/
│   │   ├── idol1.jpg
│   │   ├── idol2.jpg
│   │   ├── ...
│   │   ├── idol20.jpg
│   │   ├── toy1.jpg
│   │   ├── toy2.jpg
│   │   ├── ...
│   │   ├── toy16.jpg
│   │   ├── artisan1.jpg
│   │   ├── photo1.jpg
│   │   └── index.js
│   └── ...
```

## 🚀 **Channapatna Toys Features**
- **Authentic:** All toys from Channapatna, Karnataka
- **Traditional:** Handcrafted wooden toys
- **Educational:** Montessori-style learning toys
- **Safe:** Natural dyes, child-safe materials
- **Cultural:** Traditional Indian games and toys

## ⚠️ **Important Notes**
- Images will be automatically optimized by Vite
- Use high-quality images for best results
- Keep file sizes reasonable for faster loading
- Test on different devices to ensure responsiveness
- All toy products are based on real Channapatna toy catalog
- Category images are used on both home page and product pages

## 🎉 **After Adding Images**
Your idol, toy, and category images will automatically display on:
1. **Home page category cards** - Artisan cards with local images
2. **Products page** - Individual product cards
3. **Category filtering** - When users filter by category

## 🔍 **Testing Your Setup**
1. Add the images to the assets folder
2. Restart your dev server: `npm run dev`
3. Go to Home page to see category cards with local images
4. Go to Products page to see product images
5. Click on different categories to see filtered results
6. All images should display automatically! 