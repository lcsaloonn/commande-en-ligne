import { useEffect, useState } from "react";
import { removeFromCart } from "states/features/cart.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { ICartItem } from "types/cart/cart.interface";
import { CartProductComponent } from "../cart-product/cartProduct.component";
import "./cart.scss";

export function CartComponent() {
  const [totalValueCart, setTotalValueCart] = useState(0);

  const cartListProducts = useAppSelector((state) => state.cart);
  const isScroll = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();

  function removeFormCartList(id: string) {
    dispatch(removeFromCart(id));
  }

  function somtotalValueCart() {
    let total = 0;
    cartListProducts.items.forEach((items) => {
      total += items.item.totalProduct;
    });
    setTotalValueCart(total);
  }

  useEffect(() => {
    somtotalValueCart();
  }, [cartListProducts]);

  return (
    <div className={`cart  ${isScroll.scroll ? "stick" : "normal"} `}>
      <div className="cart-content">
        <div className="cart-content-title">Mon Panier</div>
      </div>

      <div className="cart-content-product">
        {cartListProducts.items.map((element: ICartItem, key: number) => {
          return (
            <CartProductComponent
              onRemoveClick={removeFormCartList}
              cartItem={element}
              key={key}
            />
          );
        })}
      </div>

      <div className="cart-content">
        <div
          className={`cart-content-price ${
            totalValueCart === 0 ? "invalide" : ""
          }`}
        >
          <span>Total :</span>
          <span>{totalValueCart.toFixed(2)} €</span>
        </div>
      </div>

      <div className="cart-footer">
        <div
          className={`cart-footer-btn ${
            totalValueCart === 0 ? "invalide" : ""
          }`}
        >
          Valider
        </div>
      </div>
    </div>
  );
}
