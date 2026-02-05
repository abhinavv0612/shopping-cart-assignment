import { useState } from "react";

export default function AddProduct({ setCart }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleAddProduct = () => {
    // Validation
    if (!name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!price || Number(price) <= 0) {
      setError("Enter a valid price");
      return;
    }

    const newProduct = {
      id: Date.now(), 
      name: name.trim(),
      price: Number(price),
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, newProduct]);

    // Reset form
    setName("");
    setPrice("");
    setError("");
  };

  return (
    <div className="add-product">
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price (INR)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddProduct}>Add</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
