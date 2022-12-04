import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";

export default function InputTextComponent({
  attributes,
  type,
  condition,
}: {
  type: HTMLInputTypeAttribute;
  attributes?: React.HTMLAttributes<HTMLInputElement>;
  condition?: RegExp;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {});

  function verifyCondition() {
    if (inputRef.current && condition) {
      if (condition.test(inputRef.current.value)) {
        inputRef.current.classList.add("valid");
      } else {
        inputRef.current.classList.add("invalide");
      }
    }
  }

  return (
    <input
      className="input-text-info-empty"
      type={type}
      {...attributes}
      ref={inputRef}
      onBlur={() => verifyCondition()}
    />
  );
}
