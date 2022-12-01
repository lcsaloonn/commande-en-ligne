import ModalComponent from "components/composite/modal/modal.component";
import { useState } from "react";
import "./time-picker.scss";

const mock = [
  ["Sunday", 9.3, 12.0, 15.3, 22.0],
  ["Monday", 8.3, 12.0, 15.3, 19.0],
  ["Tuesday", 8.3, 12.0, 15.3, 19.0],
  ["Wednesday", 8.3, 12.0, 15.3, 19.0],
  ["Thursday", 8.3, 12.0, 15.3, 19.0],
  ["Friday", 8.3, 11.3],
  ["Saturday"],
];

export default function TimePickerComponent() {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => SetIsModalOpen(true)}>thomas</button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => SetIsModalOpen(false)}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          officiis debitis sequi voluptates ipsam adipisci nisi ullam unde odio
          quos veniam voluptate, aspernatur, cupiditate perferendis odit! Quia
          delectus reprehenderit distinctio?
        </div>
      </ModalComponent>
    </>
  );
}
