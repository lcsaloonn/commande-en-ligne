import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WithdrawalTimeComponent } from "components/base/zindex";
import ModalComponent from "components/composite/modal/modal.component";
import { useState } from "react";
import "./time-picker.scss";

export default function TimePickerComponent({
  nextTime,
}: {
  nextTime: string;
}) {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  return (
    <>
      <button className="timePicker-btn" onClick={() => SetIsModalOpen(true)}>
        Retrait de ma commande - {nextTime}
        <FontAwesomeIcon className="timePicker-icon" icon={faClock} />
      </button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => SetIsModalOpen(false)}
      >
        <WithdrawalTimeComponent />
      </ModalComponent>
    </>
  );
}
