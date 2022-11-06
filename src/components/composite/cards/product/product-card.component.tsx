import { IImage } from "types/img.type";
import { truncate } from "utils/text.utils";
import "./product-card.scss";

export function ProductCardComponent({
  title,
  text,
  price,
  isDisable,
  img,
}: {
  title: string;
  text?: string;
  price: number;
  isDisable: boolean;
  img: IImage;
}) {
  return (
    <div className={`product-card ${isDisable ? "disable" : ""}`}>
      <div className="product-card-content">
        <div
          className={`product-card-content-title ${isDisable ? "disable" : ""}`}
        >
          {title}
        </div>
        <div className="product-card-content-ingredients">
          {text != null ? truncate(text, 90) : ""}
        </div>
        <div
          className={`product-card-content-price ${isDisable ? "disable" : ""}`}
        >
          {isDisable ? "indisponible" : price.toFixed(2) + " €"}
        </div>
      </div>
      <div className={`product-card-image ${isDisable ? "disable" : ""}`}>
        <img src={img.link} alt={img.alt} />
      </div>
    </div>
  );
}
