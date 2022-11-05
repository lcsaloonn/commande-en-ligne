import { useState } from "react";
import "./additionals.scss";

export function AdditionalsComponent({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  const [isChecked, setIsChecked] = useState(false);

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
