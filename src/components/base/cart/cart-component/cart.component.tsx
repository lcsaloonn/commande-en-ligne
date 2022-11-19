import {
  CartButtonComponent,
  CartPriceComponent,
} from "components/composite/cart/z-index";
import { useEffect, useState } from "react";
import { removeFromCart } from "states/features/cart.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { ICartItem } from "types/cart/cart.interface";
import CartContainerComponent from "../cart-container/cart.container";
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
      total += items.item.totalProduct;
    });
    setTotalValueCart(total);
  }

  useEffect(() => {
    somtotalValueCart();
  }, [cartListProducts]);

  return (
    <CartContainerComponent>
      <>
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
          <CartPriceComponent price={totalValueCart} />
        </div>
        <CartButtonComponent
          text="valider"
          isValide={totalValueCart === 0 ? false : true}
        />
      </>
    </CartContainerComponent>
  );
}
