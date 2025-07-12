# Idol Images Setup Guide

## 📁 **How to Add Your Idol Images**

### **Step 1: Prepare Your Images**
- Make sure you have 20 idol photos ready
- Recommended format: JPG or PNG
- Recommended size: 400x400 pixels or larger
- File size: Keep under 500KB each for better performance

### **Step 2: Add Images to Assets Folder**
1. Navigate to: `Sajjivana/src/assets/`
2. Add your idol images with these exact names:
   - `idol1.jpg`
   - `idol2.jpg`
   - `idol3.jpg`
   - `idol4.jpg`
   - `idol5.jpg`
   - `idol6.jpg`
   - `idol7.jpg`
   - `idol8.jpg`
   - `idol9.jpg`
   - `idol10.jpg`
   - `idol11.jpg`
   - `idol12.jpg`
   - `idol13.jpg`
   - `idol14.jpg`
   - `idol15.jpg`
   - `idol16.jpg`
   - `idol17.jpg`
   - `idol18.jpg`
   - `idol19.jpg`
   - `idol20.jpg`

### **Step 3: Image Naming Convention**
- Use lowercase letters
- Use numbers 1-20
- Use `.jpg` extension (or `.png` if preferred)
- No spaces or special characters

### **Step 4: Test Your Setup**
1. Start your development server: `npm run dev`
2. Navigate to the Products page
3. Click on "Idols" category
4. You should see your idol images displayed

## 🎯 **Product Categories Using Idol Images**

### **Idols Category (20 products):**
- Products 1-20 will use `idol1.jpg` to `idol20.jpg`

### **Murtis Category (4 products):**
- Products 21-24 will use `idol1.jpg` to `idol4.jpg` (reused)

## 🔧 **Fallback System**
- If an image fails to load, a fallback image will be displayed
- Check browser console for any image loading errors
- Make sure image paths are correct

## 📝 **Example File Structure**
```
Sajjivana/
├── src/
│   ├── assets/
│   │   ├── idol1.jpg
│   │   ├── idol2.jpg
│   │   ├── idol3.jpg
│   │   ├── ...
│   │   ├── idol20.jpg
│   │   └── index.js
│   └── ...
```

## ⚠️ **Important Notes**
- Images will be automatically optimized by Vite
- Use high-quality images for best results
- Keep file sizes reasonable for faster loading
- Test on different devices to ensure responsiveness

## 🚀 **After Adding Images**
Your idol products will automatically display the new images once you add them to the assets folder and restart your development server! 