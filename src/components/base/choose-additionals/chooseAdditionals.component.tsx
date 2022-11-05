import { AdditionalsComponent } from "components/composite/cards/zindex";
import { LessMoreComponent } from "components/composite/zindex";
import "./chooseAdditionals.scss";

export function ChooseAdditionalComponent({
  title,
  ingredients,
  additionals,
}: {
  title: string;
  ingredients: string;
  additionals: {
    title: string;
    additions: { name: string; price: number }[];
  };
}) {
  return (
    <>
      <div className="cart-modal-content-title">{title}</div>
      <div className="cart-modal-content-ingredient">{ingredients}</div>

      <div className="cart-modal-content-quantity">
        <span>Quantité :</span>
        <LessMoreComponent min={0} max={100} defaultNumber={1} />
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
      </div>
    </>
  );
}
