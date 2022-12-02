import { useEffect, useRef, useState } from "react";
import "./select.scss";

export default function SelectComponent({
  data,
  defaultValue,
  selectedTime,
}: {
  data: any[];
  defaultValue: string | number;
  selectedTime: any;
}) {
  const [isActivated, setActivated] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(defaultValue);
  const textBox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textBox.current) {
      textBox.current.value = selectedOption;
      selectedTime(textBox.current.value);
    }
  }, [selectedOption]);

  return (
    <div
      className={`dropdown ${isActivated ? "active" : ""}`}
      onClick={() => setActivated(!isActivated)}
    >
      <input type="text" className="textbox" readOnly ref={textBox} />
      <div className="option">
        {data.map((data: any, id: number) => (
          <div
            onClick={() => {
              setSelectedOption(data);
            }}
            id={data}
            key={id}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}
