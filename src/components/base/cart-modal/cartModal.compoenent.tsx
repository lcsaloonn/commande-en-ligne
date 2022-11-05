import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdditionalsComponent } from "components/composite/cards/zindex";
import { LessMoreComponent } from "components/composite/zindex";
import "./cartModal.scss";

export function CartModalComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (!open) return null;

  return (
    <>
      {open && (
        <div className="cart-modal">
          <div onClick={onClose} className="overlay"></div>
          <div className="cart-modal-content">
            <div className="cart-modal-content-title">BUSTINA VERDE</div>
            <div className="cart-modal-content-ingredient">
              Mozza fior di latte, Saumon frais, crème de mascarpone citronnée,
              ciboulette & échalotes coupées finement, épinard frais, parmigiano
              reggiano 22 mois AOP, tomates cerises.
            </div>

            <div className="cart-modal-content-quantity">
              <span>Quantité :</span>
              <LessMoreComponent min={0} max={100} defaultNumber={1} />
            </div>

            <div className="cart-modal-content-additional">
              <div className="cart-modal-content-additional-title">
                Supp Pizza
              </div>
              <div className="cart-modal-content-additional-subtitle">
                Facultatif
              </div>
              <div className="cart-modal-content-additional-content">
                <AdditionalsComponent />
              </div>
            </div>

            <div className="close-modal" onClick={onClose}>
              <FontAwesomeIcon className="button-go-back-icon" icon={faX} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
