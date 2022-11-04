import { useState } from "react";
import "./lessMore.scss";

export function LessMoreComponent({
  min,
  max,
  defaultNumber,
}: {
  min: number;
  max: number;
  defaultNumber: number;
}) {
  const [number, setNumber] = useState(defaultNumber);
  return (
    <div className="less-more">
      <div className="less-more-btn" onClick={() => setNumber(number - 1)}>
        -
      </div>
      <div className="less-more-number">{number}</div>
      <div
        className="less-more-btn items-center"
        onClick={() => setNumber(number + 1)}
      >
        +
      </div>
    </div>
  );
}
