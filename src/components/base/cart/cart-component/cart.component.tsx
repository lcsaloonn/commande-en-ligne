import { useEffect, useState } from "react";
import { removeFromCart } from "states/features/cart.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { ICartItem } from "types/cart/cart.interface";
import { CartProductComponent } from "../cart-product/cartProduct.component";
import "./cart.scss";

export function CartComponent() {
  const [totalValueCart, setTotalValueCart] = useState(0);

  const cartListProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function removeFormCartList(id: string) {
    dispatch(removeFromCart(id));
  }

  function somtotalValueCart() {
    let total = 0;
    cartListProducts.items.forEach((items) => {
      total += items.totalProduct;
    });
    setTotalValueCart(total);
  }

  useEffect(() => {
    somtotalValueCart();
  }, [cartListProducts]);

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-content-title">Mon Panier</div>
      </div>

      <div className="cart-content-product">
        {cartListProducts.items.map((element: ICartItem, key: number) => (
          <CartProductComponent
            id={element.id}
            quantity={element.quantity}
            name={element.product.title}
            price={element.totalProduct}
            onRemoveClick={removeFormCartList}
            key={key}
          />
        ))}
      </div>

      <div className="cart-content">
        <div className="cart-content-price">
          <span>Total :</span>
          <span>{totalValueCart.toFixed(2)} €</span>
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-footer-btn">Valider</div>
      </div>
    </div>
  );
}
