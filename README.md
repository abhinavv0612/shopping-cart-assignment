# 🛒 Shopping Cart Application

A modern and responsive shopping cart built using **React.js**. The application allows users to manage products, update quantities, apply discounts, and dynamically switch currencies.

---

## 🚀 Live Demo

🔗 **Netlify Deployment:** https://idyllic-gumdrop-22cb6e.netlify.app/

---

## ✨ Features

- 🛍 Display a list of products  
- 🔢 Update product quantities dynamically  
- 💰 Real-time total price calculation  
- 🎟 Apply discount percentage to cart total  
- 🌍 Dynamic currency selector (USD / INR / EUR)  
- ➕ Add new products to the cart  
- 🗑 Remove products from the cart  
- 💾 Cart state persists using LocalStorage  
- 📱 Fully responsive design  
- 🧪 Unit tests using React Testing Library  

---

## 🧠 Tech Stack

- **React.js**
- JavaScript (ES6+)
- CSS (Modern UI styling)
- React Hooks (`useState`, `useEffect`)
- Intl API for currency formatting
- Jest + React Testing Library

---

## 📦 Installation & Local Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/shopping-cart.git
cd shopping-cart
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

The app runs at:

```
http://localhost:3000
```

---

## 🏗 Production Build

```bash
npm run build
```

Generates the `build/` folder for deployment.

---

## 🧪 Run Unit Tests

```bash
npm test
```

---

## 📁 Project Structure

```
src/
 ┣ components/
 ┃ ┣ Cart.js
 ┃ ┣ CartItem.js
 ┃ ┣ AddProduct.js
 ┃ ┣ DiscountInput.js
 ┃ ┗ CurrencySelector.js
 ┣ data/
 ┃ ┗ products.js
 ┣ App.js
 ┗ index.css
```

---

## 💡 Key Highlights

- Clean component-based architecture  
- State management using React Hooks  
- Business logic separated from UI  
- Currency localization with Intl API  
- Responsive and modern UI design  
- Persistent cart storage  
- Testable and maintainable codebase  

---

## 📜 License

This project is built for learning and assessment purposes.
