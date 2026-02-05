import { useState, useEffect } from "react";

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
  formatCurrency,
}) {
  const [inputValue, setInputValue] = useState("");

  // Sync when cart updates externally
  useEffect(() => {
    setInputValue(item.quantity);
  }, [item.quantity]);

  const handleChange = (e) => {
    const val = e.target.value;

    // Allow empty input
    setInputValue(val);

    if (val === "") {
      onQuantityChange(item.id, 1); // default internally
    } else {
      onQuantityChange(item.id, Number(val));
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>Price: {formatCurrency(item.price)}</p>
        <p>Total: {formatCurrency(item.price * item.quantity)}</p>
      </div>

      <div className="cart-item-controls">
        <input
          type="number"
          min="1"
          placeholder="Qty"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
}
