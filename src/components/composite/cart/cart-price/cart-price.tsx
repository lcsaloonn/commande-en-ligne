import "./cart-price.scss";

export default function CartPriceComponent({ price }: { price: number }) {
  return (
    <div className={`cart-price ${price <= 0 ? "invalide" : ""}`}>
      <span>Total :</span>
      <span>{price.toFixed(2)} €</span>
    </div>
  );
}
