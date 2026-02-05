import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { useState } from "react";
import '@testing-library/jest-dom';
import Cart from "./components/Cart";

test("calculates cart total correctly", () => {
  const cart = [
    { id: 1, name: "Test Product", price: 100, quantity: 2 },
  ];

  render(
    <Cart
      cart={cart}
      setCart={() => {}}
      discount={0}
      setDiscount={() => {}}
      currency="USD"
      setCurrency={() => {}}
    />
  );


  // eslint-disable-next-line testing-library/no-node-access
  const totalsSection = document.querySelector(".totals");

  expect(totalsSection).toHaveTextContent("USD 200.00");
});


test("applies discount correctly", () => {
  const cart = [
    { id: 1, name: "Test Product", price: 100, quantity: 2 }, // 200 total
  ];

  render(
    <Cart
      cart={cart}
      setCart={() => {}}
      discount={10} // 10% discount
      setDiscount={() => {}}
      currency="USD"
      setCurrency={() => {}}
    />
  );

  // eslint-disable-next-line testing-library/no-node-access
  const totalsSection = document.querySelector(".totals");

  // After 10% discount - (200 - 20 = 180)
  expect(totalsSection).toHaveTextContent("USD 180.00");
});

test("removes product from cart", () => {
  function Wrapper() {
    const [cart, setCart] = useState([
      { id: 1, name: "Test Product", price: 100, quantity: 1 },
    ]);

    return (
      <Cart
        cart={cart}
        setCart={setCart}
        discount={0}
        setDiscount={() => {}}
        currency="USD"
        setCurrency={() => {}}
      />
    );
  }

  render(<Wrapper />);

  // Click Remove button
  const removeBtn = screen.getByText("Remove");
  fireEvent.click(removeBtn);

  // Cart should now show empty message
  expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
});