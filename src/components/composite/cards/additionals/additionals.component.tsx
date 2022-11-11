import { useEffect, useRef, useState } from "react";
import {
  addExtraToProductSelected,
  removeExtraToProductSelected,
} from "states/features/products.slice";
import { useAppDispatch } from "states/hoocks";
import { IExtra } from "types/product/extras.interface";
import "./additionals.scss";

export function AdditionalsComponent({
  extraObject,
  checkedByDefault,
}: {
  extraObject: IExtra;
  checkedByDefault: boolean;
}) {
  const [isChecked, setIsChecked] = useState(checkedByDefault);
  const dispatch = useAppDispatch();
  const firstUpdate = useRef(true);

  function handleChange(event: any) {
    setIsChecked(event.target.checked);
  }

  useEffect(() => {
    if (firstUpdate.current) {
      if (isChecked === true) {
        dispatch(addExtraToProductSelected(extraObject));
      } else {
        dispatch(removeExtraToProductSelected(extraObject));
      }
    }
  }, [isChecked]);

  return (
    <div className={`additionals ${isChecked ? "checked" : ""}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div
        className="additionals-name"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        Supp {extraObject.name}
      </div>
      <div className="additionals-price">
        + {extraObject.price.toFixed(2)} €
      </div>
    </div>
  );
}
