import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import { productList } from "./data/products";
import "./index.css";

function App() {
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : productList;
  });

  
  const [discount, setDiscount] = useState(0);

 
  const [currency, setCurrency] = useState("USD");


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>

      <Cart
        cart={cart}
        setCart={setCart}
        discount={discount}
        setDiscount={setDiscount}
        currency={currency}
        setCurrency={setCurrency}
      />
    </div>
  );
}

export default App;
