import { useState } from "react";

export function LessMoreComponent() {
  const [number, setNumber] = useState(0);
  return (
    <div className="less-more">
      <div className="less-more-remove" onClick={() => setNumber(number - 1)}>
        -
      </div>
      <div className="less-more-number">{number}</div>
      <div className="less-more-add" onClick={() => setNumber(number + 1)}>
        +
      </div>
    </div>
  );
}
