import "./cart-btn.scss";

export default function CartButtonComponent({
  text,
  isValide,
}: {
  text: string;
  isValide: boolean;
}) {
  return (
    <div className="cart-button">
      <div className={isValide ? "" : "invalide"}>Valider</div>
    </div>
  );
}
