import { Link } from "react-router-dom";
import "./cart-phone-btn.scss";

export default function CartPhoneBtn({ price }: { price: number }) {
  return (
    <Link className="cart-phone-btn" to={"cart"}>
      <span>Afficher mon panier</span>
      <span>{price.toFixed(2).replace(".", ",")} €</span>
    </Link>
  );
}
