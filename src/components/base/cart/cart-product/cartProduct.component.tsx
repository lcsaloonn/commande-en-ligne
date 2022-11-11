import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./cartProduct.scss";
import { useState } from "react";
import { useAppDispatch } from "states/hoocks";
import { openModal } from "states/features/modal.slice";
import { updateSelectProduct } from "states/features/products.slice";
import { ICartItem } from "types/cart/cart.interface";

const mocktest = ["Jambon Parma", "Jambon Parma", "Jambon Parma"];
export function CartProductComponent({
  cartItem,
  onRemoveClick,
}: {
  cartItem: ICartItem;
  onRemoveClick?: any;
}) {
  const [openExtras, setOpenExtras] = useState(false);
  const { quantity, product, extras, totalProduct } = cartItem.item;
  const extrasList = extras.map((element) => element.name);

  const dispatch = useAppDispatch();

  return (
    <div className="cart-container">
      <div className="cart-product">
        <div className="cart-product-quantity">
          <div className="cart-product-quantity-content">
            <span>{quantity}</span>
            <span>x</span>
          </div>
        </div>
        <div
          className="cart-product-name"
          onClick={() => {
            if (product !== undefined) {
              dispatch(
                updateSelectProduct({
                  cartID: cartItem.id,
                  product: product,
                  extras: extras,
                  quantity: quantity,
                  totalProduct: totalProduct,
                  isBeeingUpdate: true,
                })
              );
              dispatch(openModal());
            }
          }}
        >
          {product.title}
        </div>
        <div className="flex  m-auto ">
          <div className="cart-product-price">
            {totalProduct.toFixed(2).toString().replace(".", ",") + " €"}
          </div>
          <div
            className="cart-product-icon"
            onClick={() => onRemoveClick(cartItem.id)}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>
      <div className={extras?.length ? "cart-product-extras" : "hidden"}>
        {extrasList?.map((element: string, count: number) => {
          const max = openExtras ? mocktest.length + 1 : 1;
          console.log(max);
          return (
            <i className={count > max ? "hidden" : ""} key={count}>
              {element}
            </i>
          );
        })}
        <div className={extras && extras?.length > 2 ? "" : "hidden"}>
          <div
            className={!openExtras ? "cart-product-extras-btn" : "hidden"}
            onClick={() => setOpenExtras(true)}
          >
            +
          </div>
          <div
            className={openExtras ? "cart-product-extras-btn" : "hidden"}
            onClick={() => setOpenExtras(false)}
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}
