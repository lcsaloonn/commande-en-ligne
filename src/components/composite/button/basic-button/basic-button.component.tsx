import "./basic-button.scss";

export function BasicButtonComponent({
  text,
  price,
  action,
}: {
  text: string;
  price?: number;
  action?: any;
}) {
  return (
    <div className="basic-button" onClick={() => action()}>
      {text} {price ? `( ${price?.toFixed(2)} ) €` : ""}
    </div>
  );
}
