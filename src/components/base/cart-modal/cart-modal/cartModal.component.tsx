import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeModal } from "states/features/modal.slice";
import { useAppDispatch, useAppSelector } from "states/hoocks";

import "./cartModal.scss";

export function CartModalComponent({ children }: { children: JSX.Element }) {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  if (isOpen) document.body.classList.add("active-modal");
  else document.body.classList.remove("active-modal");
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="cart-modal">
          <div onClick={() => dispatch(closeModal())} className="overlay"></div>
          <div className="cart-modal-content">
            {children}
            <div className="close-modal" onClick={() => dispatch(closeModal())}>
              <FontAwesomeIcon className="button-go-back-icon" icon={faX} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
