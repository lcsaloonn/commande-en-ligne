import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import CartPriceComponent from "./cart-price";

describe(CartPriceComponent, () => {
  const priceNumber = 55;
  const setup = () => render(<CartPriceComponent price={priceNumber} />);

  it("should display correct props", () => {
    setup();
    const price = screen.getByTestId("cart-price");
    expect(price.textContent).toBe(priceNumber.toFixed(2) + " €");
  });

  it("should be invalid container when price <= 0", () => {
    render(<CartPriceComponent price={0} />);
    const container = screen.getByTestId("cart-price-container");
    expect(container.className).toContain("invalid");
  });
});
