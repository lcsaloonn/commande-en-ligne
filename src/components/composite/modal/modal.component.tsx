import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import "./modal.scss";

export default function ModalComponent({
  children,
  isOpen,
  onClose,
}: {
  children: JSX.Element;
  isOpen: boolean;
  onClose: any;
}) {
  if (!isOpen) return null;
  else
    return ReactDOM.createPortal(
      <>
        <div className="overlay" onClick={onClose} />
        <div className="modal">
          <div className="modal-content">
            {children}
            <div className="close-modal" onClick={onClose}>
              <FontAwesomeIcon className="button-go-back-icon" icon={faX} />
            </div>
          </div>
        </div>
      </>,
      document.getElementById("portal") as HTMLElement
    );
}
