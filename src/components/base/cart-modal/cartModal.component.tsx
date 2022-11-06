import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChooseAdditionalComponent } from "../zindex";
import "./cartModal.scss";

const mock = {
  title: "Bustina Vert",
  ingredients:
    "Mozza fior di latte, Saumon frais, crème de mascarpone citronnée, ciboulette & échalotes coupées finement, épinard frais, parmigiano reggiano 22 mois AOP, tomates cerises.",
  price: 26.95,
  additionals: {
    title: "Pizza",
    additions: [
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
    ],
  },
};

export function CartModalComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  if (open) document.body.classList.add("active-modal");
  else document.body.classList.remove("active-modal");

  if (!open) return null;

  return (
    <>
      {open && (
        <div className="cart-modal">
          <div onClick={onClose} className="overlay"></div>
          <div className="cart-modal-content">
            <ChooseAdditionalComponent
              title={mock.title}
              ingredients={mock.ingredients}
              additionals={mock.additionals}
              price={mock.price}
            />
            <div className="close-modal" onClick={onClose}>
              <FontAwesomeIcon className="button-go-back-icon" icon={faX} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
