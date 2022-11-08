import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cartModal.scss";

export function CartModalComponent({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: any;
  children: JSX.Element;
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
            {children}
            <div className="close-modal" onClick={onClose}>
              <FontAwesomeIcon className="button-go-back-icon" icon={faX} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
