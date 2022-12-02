import SelectComponent from "components/composite/form/element/select/select.custom.component";
import { useEffect, useRef, useState } from "react";
import "./withdrawal-time.scss";

export default function WithdrawalTimeComponent() {
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
          data={[14, 14.15, 14.3, 14.45, 15]}
          defaultValue={14}
          selectedTime={(value: number) => setChoosenTime(value)}
        />
      </div>
      {/* planifer valid le from si changement dans select */}
      <button className="withdrawalTime-btn" ref={planBtn}>
        Planifier
      </button>
      {/* au plus tot close modal */}
      <button className="btn-red">Au plus tôt {"(18:48)"}</button>
    </div>
  );
}
