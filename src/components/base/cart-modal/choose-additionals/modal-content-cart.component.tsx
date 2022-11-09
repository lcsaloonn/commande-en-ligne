import { AdditionalsComponent } from "components/composite/cards/zindex";
import { LessMoreComponent } from "components/composite/zindex";
import { useEffect, useState } from "react";
import { addToCart } from "states/features/cart.slice";
import { closeModal } from "states/features/modal.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { IExtra } from "types/product/extras.interface";
import { IProduct } from "types/product/product.interface";

import "./modal-content-cart.scss";

export function ModalContentCartComponent({ product }: { product: IProduct }) {
  const [finalPrice, setFinalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const extrasList = useAppSelector((state) => state.products.extrasList).find(
    (element) => element.id === product.extrasID
  );

  const selectedExtras = useAppSelector(
    (state) => state.products.productSelected
  ).extras;

  const dispatch = useAppDispatch();

  /** Calucle la Somme des prix contenu dans le tableau d'extras */
  function sumExtras() {
    let sum = 0;
    selectedExtras.forEach((element) => {
      sum += element.price;
    });
    return sum;
  }

  /**
   * retourne la quantité du composant lesMoreComponent
   */
  function returnQuantity(quantity: number) {
    setQuantity(quantity);
  }

  /**
   * Calcule le prix en à chaque modification de quantity ou selectedExtras
   */
  useEffect(() => {
    setFinalPrice((product.price + sumExtras()) * quantity);
  }, [quantity, selectedExtras]);

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
          Supp {extrasList?.type}
        </div>
        <div className="cart-modal-content-additional-subtitle">Facultatif</div>
        <div className="cart-modal-content-additional-content">
          {extrasList?.extras.map((item: IExtra, key: number) => (
            <div
              className="cart-modal-content-additional-content-item"
              key={key}
            >
              <AdditionalsComponent extraObject={item} />
            </div>
          ))}
        </div>
        <div className="cart-modal-content-price">
          <div
            className="cart-modal-content-price-container"
            onClick={() => {
              dispatch(
                addToCart({
                  id: 1,
                  product: product,
                  extras: selectedExtras,
                  quantity: quantity,
                  totalProduct: finalPrice,
                })
              );
              dispatch(closeModal());
            }}
          >
            Valider ( {finalPrice.toFixed(2)} €)
          </div>
        </div>
      </div>
    </>
  );
}
