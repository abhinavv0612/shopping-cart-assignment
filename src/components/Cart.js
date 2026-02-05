import CartItem from "./CartItem";
import DiscountInput from "./DiscountInput";
import AddProduct from "./AddProduct";
import CurrencySelector from "./CurrencySelector";

export default function Cart({
  cart,
  setCart,
  discount,
  setDiscount,
  currency,
  setCurrency,
}) {
  
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      currencyDisplay: "code",
    }).format(value);

  
  const handleQuantityChange = (id, quantity) => {
    const qty = Math.max(1, Number(quantity));
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Remove product
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Totals
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountedTotal = total - (total * discount) / 100;

  return (
    <div className="cart-container">
      
      <CurrencySelector currency={currency} setCurrency={setCurrency} />

     
      <AddProduct setCart={setCart} />

     
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
            formatCurrency={formatCurrency}
          />
        ))
      )}

     
      <DiscountInput discount={discount} setDiscount={setDiscount} />

      
      <div className="totals">
        <h3>Total: {formatCurrency(total)}</h3>
        <h2>After Discount: {formatCurrency(discountedTotal)}</h2>
      </div>
    </div>
  );
}
