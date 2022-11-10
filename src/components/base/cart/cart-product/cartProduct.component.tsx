import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./cartProduct.scss";
import { useState } from "react";

const mocktest = ["Jambon Parma", "Jambon Parma", "Jambon Parma"];
export function CartProductComponent({
  id,
  quantity,
  name,
  price,
  extras,
  onRemoveClick,
}: {
  id?: string;
  quantity: number;
  name: string;
  price: number;
  extras?: string[];
  onRemoveClick?: any;
}) {
  const [openExtras, setOpenExtras] = useState(false);

  return (
    <div className="cart-container">
      <div className="cart-product">
        <div className="cart-product-quantity">
          <div className="cart-product-quantity-content">
            <span>{quantity}</span>
            <span>x</span>
          </div>
        </div>
        <div className="cart-product-name">{name}</div>
        <div className="flex  m-auto ">
          <div className="cart-product-price">
            {price.toFixed(2).toString().replace(".", ",") + " €"}
          </div>
          <div className="cart-product-icon" onClick={() => onRemoveClick(id)}>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>
      <div className={extras?.length ? "cart-product-extras" : "hidden"}>
        {extras?.map((element: string, count: number) => {
          const max = openExtras ? mocktest.length : 1;
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
