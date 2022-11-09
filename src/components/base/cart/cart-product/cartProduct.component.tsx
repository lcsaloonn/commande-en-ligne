import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./cartProduct.scss";

export function CartProductComponent({
  id,
  quantity,
  name,
  price,
  onRemoveClick,
}: {
  id?: string;
  quantity: number;
  name: string;
  price: number;
  onRemoveClick?: any;
}) {
  return (
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
  );
}
