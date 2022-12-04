import "./cart-container.scss";

export default function CartContainerComponent({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div className="cart-container">
      <div className="cart-container-title">Mon Panier</div>
      {children}
    </div>
  );
}
