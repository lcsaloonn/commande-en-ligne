import { openModal } from "states/features/modal.slice";
import { selectProduct } from "states/features/products.slice";
import { useAppDispatch } from "states/hoocks";
import { IProduct } from "types/product/product.interface";
import { truncate } from "utils/text.utils";
import "./product-card.scss";

export function ProductCardComponent({
  product,
  isDisable,
}: {
  product: IProduct;
  isDisable: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`product-card ${isDisable ? "disable" : ""}`}
      onClick={() => {
        dispatch(selectProduct(product));
        dispatch(openModal());
      }}
    >
      <div className="product-card-content">
        <div
          className={`product-card-content-title ${isDisable ? "disable" : ""}`}
        >
          {product.title}
        </div>
        <div className="product-card-content-ingredients">
          {product.ingredients != null ? truncate(product.ingredients, 90) : ""}
        </div>
        <div
          className={`product-card-content-price ${isDisable ? "disable" : ""}`}
        >
          {isDisable ? "indisponible" : product.price.toFixed(2) + " €"}
        </div>
      </div>
      <div
        className={`${product.img ? "product-card-image" : "hidden"} ${
          isDisable ? "disable" : ""
        } `}
      >
        <img src={product.img?.link} alt={product.img?.alt} />
      </div>
    </div>
  );
}
