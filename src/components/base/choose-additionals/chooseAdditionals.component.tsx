import { AdditionalsComponent } from "components/composite/cards/zindex";
import { LessMoreComponent } from "components/composite/zindex";
import { useEffect, useState } from "react";
import "./chooseAdditionals.scss";

export function ChooseAdditionalComponent({
  title,
  ingredients,
  additionals,
  price,
}: {
  title: string;
  ingredients: string;
  price: number;
  additionals: {
    title: string;
    additions: { name: string; price: number }[];
  };
}) {
  const [finalPrice, setFinalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  function returnQuantity(quantity: number) {
    setQuantity(quantity);
  }

  useEffect(() => {
    setFinalPrice(price * quantity);
  }, [quantity]);

  return (
    <>
      <div className="cart-modal-content-title">{title}</div>
      <div className="cart-modal-content-ingredient">{ingredients}</div>

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
          Supp {additionals.title}
        </div>
        <div className="cart-modal-content-additional-subtitle">Facultatif</div>
        <div className="cart-modal-content-additional-content">
          {additionals.additions.map(
            (item: { name: string; price: number }, key: number) => (
              <div
                className="cart-modal-content-additional-content-item"
                key={key}
              >
                <AdditionalsComponent name={item.name} price={item.price} />
              </div>
            )
          )}
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
