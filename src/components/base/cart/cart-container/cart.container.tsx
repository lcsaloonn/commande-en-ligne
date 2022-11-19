import { useAppSelector } from "states/hoocks";
import "./cart-container.scss";

export default function CartContainerComponent({
  children,
}: {
  children: JSX.Element;
}) {
  const isScroll = useAppSelector((state) => state.scroll);

  return (
    <div className={`cart-container  ${isScroll.scroll ? "stick" : "normal"} `}>
      {children}
    </div>
  );
}
