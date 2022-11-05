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

  return (
    <div className={`additionals ${isChecked ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
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
