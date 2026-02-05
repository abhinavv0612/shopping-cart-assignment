import { useState, useEffect } from "react";

export default function DiscountInput({ discount, setDiscount }) {
  const [inputValue, setInputValue] = useState("");

  
  useEffect(() => {
    setInputValue(discount === 0 ? "" : discount);
  }, [discount]);

  const handleChange = (e) => {
    const val = e.target.value;

    
    setInputValue(val);

    if (val === "") {
      setDiscount(0);
      return;
    }

    const num = Number(val);

    
    if (num >= 0 && num <= 100) {
      setDiscount(num);
    }
  };

  return (
    <div className="discount-section">
      <label>Discount %: </label>
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Discount"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
