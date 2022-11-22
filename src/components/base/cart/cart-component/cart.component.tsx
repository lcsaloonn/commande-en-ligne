import {
  CartButtonComponent,
  CartPriceComponent,
} from "components/composite/cart/z-index";
import { removeFromCart } from "states/features/cart.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { ICartItem } from "types/cart/cart.interface";
import CartContainerComponent from "../cart-container/cart.container";
import { CartProductComponent } from "../cart-product/cartProduct.component";
import "./cart.scss";

export function CartComponent() {
  const cartListProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function removeFormCartList(id: string) {
    dispatch(removeFromCart(id));
  }

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
          <CartPriceComponent price={cartListProducts.total} />
        </div>
        <CartButtonComponent
          text="valider"
          isValide={cartListProducts.total === 0 ? false : true}
        />
      </>
    </CartContainerComponent>
  );
}
