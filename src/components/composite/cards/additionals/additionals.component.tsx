import { useState } from "react";
import "./additionals.scss";

export function AdditionalsComponent() {
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
        Supp Jambon Parma
      </div>
      <div className="additionals-price">+ 2,25 €</div>
    </div>
  );
}
