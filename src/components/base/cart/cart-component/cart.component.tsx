import { CartProductComponent } from "../cart-product/cartProduct.component";
import "./cart.scss";

export function CartComponent() {
  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-content-title">Mon Panier</div>
      </div>

      <div className="cart-content-product">
        <CartProductComponent quantity={1} name={"Burrata"} price={10} />
      </div>

      <div className="cart-content">
        <div className="cart-content-price">
          <span>Total :</span>
          <span>37,50 €</span>
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-footer-btn">Valider</div>
      </div>
    </div>
  );
}
