import { useState } from "react";
import "./additionals.scss";

export function AdditionalsComponent({
  name,
  price,
  isSelected,
}: {
  name: string;
  price: number;
  isSelected: boolean;
}) {
  const [isChecked, setIsChecked] = useState(isSelected);

  function handleChange(event: any) {
    setIsChecked(event.target.checked);
  }

  return (
    <div className={`additionals ${isChecked ? "checked" : ""}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div
        className="additionals-name"
        onClick={() => setIsChecked(!isChecked)}
      >
        Supp {name}
      </div>
      <div className="additionals-price">+ {price.toFixed(2)} €</div>
    </div>
  );
}
