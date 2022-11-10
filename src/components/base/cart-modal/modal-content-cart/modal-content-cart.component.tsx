import { AdditionalsComponent } from "components/composite/cards/zindex";
import {
  BasicButtonComponent,
  LessMoreComponent,
} from "components/composite/zindex";
import { useEffect, useState } from "react";
import { addToCart, updateProductFromCart } from "states/features/cart.slice";
import { closeModal } from "states/features/modal.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";
import { IExtra } from "types/product/extras.interface";
import { ProductSelected } from "types/product/productSelected.interface";
import "./modal-content-cart.scss";

export function ModalContentCartComponent({
  productSelected,
}: {
  productSelected: ProductSelected;
}) {
  const [finalPrice, setFinalPrice] = useState(productSelected.product.price);
  const [quantity, setQuantity] = useState(1);

  const extrasList = useAppSelector((state) => state.products.extrasList).find(
    (element) => element.id === productSelected.product.extrasID
  );

  const dispatch = useAppDispatch();

  /** Calucle la Somme des prix contenu dans le tableau d'extras */
  function sumExtras() {
    let sum = 0;
    productSelected.extras.forEach((element) => {
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
    setFinalPrice((productSelected.product.price + sumExtras()) * quantity);
  }, [quantity, productSelected.extras]);

  /**
   * action for btn
   */
  function sendData() {
    const data = {
      product: productSelected.product,
      extras: productSelected.extras,
      quantity: quantity,
      totalProduct: finalPrice,
      isBeeingUpdate: false,
    };
    if (productSelected.isBeeingUpdate === true) {
      dispatch(updateProductFromCart(data));
    } else {
      dispatch(addToCart(data));
    }
    dispatch(closeModal());
  }

  return (
    <>
      <div className="cart-modal-content-title">
        {productSelected.product.title}
      </div>
      <div className="cart-modal-content-ingredient">
        {productSelected.product.ingredients}
      </div>

      <div className="cart-modal-content-quantity">
        <span>Quantité :</span>
        <LessMoreComponent
          min={1}
          max={100}
          defaultNumber={productSelected.quantity}
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
          <BasicButtonComponent
            text="Valider"
            price={finalPrice}
            action={sendData}
          />
        </div>
      </div>
    </>
  );
}
