import "./cart-price.scss";

export default function CartPriceComponent({ price }: { price: number }) {
  return (
    <div
      className={`cart-price ${price <= 0 ? "invalid" : ""}`}
      data-testid="cart-price-container"
    >
      <span>Total :</span>
      <span data-testid="cart-price">{price.toFixed(2)} €</span>
    </div>
  );
}
