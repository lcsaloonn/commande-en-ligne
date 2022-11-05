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

  function verificationData(data: number) {
    if (data <= max && data >= min) return data;
    else return number;
  }

  return (
    <div className="less-more">
      <div
        className="less-more-btn"
        onClick={() => setNumber(verificationData(number - 1))}
      >
        -
      </div>
      <div className="less-more-number">{number}</div>
      <div
        className="less-more-btn items-center"
        onClick={() => setNumber(verificationData(number + 1))}
      >
        +
      </div>
    </div>
  );
}
