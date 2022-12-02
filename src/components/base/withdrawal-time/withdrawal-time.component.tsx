import SelectComponent from "components/composite/form/element/select/select.custom.component";
import { useEffect, useRef, useState } from "react";
import { TimeService } from "service/time/time.service";
import "./withdrawal-time.scss";

export default function WithdrawalTimeComponent({
  selected,
}: {
  selected: any;
}) {
  const [choosenTime, setChoosenTime] = useState<number>();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const planBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (planBtn.current && isSelected !== false) {
      planBtn.current.classList.add("active");
    }
  }, [choosenTime]);

  return (
    <div className="withdrawalTime">
      <div className="withdrawalTime-title">
        Planifiez l'heure de retrait de votre commande
      </div>
      <div onClick={() => setIsSelected(true)}>
        <SelectComponent
          data={TimeService.createPickUpList(12, 13, 15)}
          selectedTime={(value: number) => setChoosenTime(value)}
        />
      </div>
      <button className="withdrawalTime-btn" ref={planBtn} onClick={selected}>
        Planifier
      </button>
      <button className="btn-red" onClick={selected}>
        Au plus tôt {"(18:48)"}
      </button>
    </div>
  );
}
