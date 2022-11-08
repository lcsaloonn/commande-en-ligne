import { AdditionalsComponent } from "components/composite/cards/zindex";
import { LessMoreComponent } from "components/composite/zindex";
import { useEffect, useState } from "react";
import { useAppSelector } from "states/hoocks";
import { IExtra } from "types/product/extras.interface";
import { IProduct } from "types/product/product.interface";

import "./chooseAdditionals.scss";

export function ChooseAdditionalComponent({ product }: { product: IProduct }) {
  const [finalPrice, setFinalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const extras = useAppSelector((state) => state.products.extrasList).find(
    (element) => element.id === product.extrasID
  );

  function returnQuantity(quantity: number) {
    setQuantity(quantity);
  }

  useEffect(() => {
    setFinalPrice(product.price * quantity);
  }, [quantity]);

  return (
    <>
      <div className="cart-modal-content-title">{product.title}</div>
      <div className="cart-modal-content-ingredient">{product.ingredients}</div>

      <div className="cart-modal-content-quantity">
        <span>Quantité :</span>
        <LessMoreComponent
          min={1}
          max={100}
          defaultNumber={1}
          returnQuantity={returnQuantity}
        />
      </div>

      <div className="cart-modal-content-additional">
        <div className="cart-modal-content-additional-title">
          Supp {extras?.type}
        </div>
        <div className="cart-modal-content-additional-subtitle">Facultatif</div>
        <div className="cart-modal-content-additional-content">
          {extras?.extras.map((item: IExtra, key: number) => (
            <div
              className="cart-modal-content-additional-content-item"
              key={key}
            >
              <AdditionalsComponent extraObject={item} />
            </div>
          ))}
        </div>
        <div className="cart-modal-content-price">
          <div className="cart-modal-content-price-container">
            Valider ( {finalPrice.toFixed(2)} €)
          </div>
        </div>
      </div>
    </>
  );
}
