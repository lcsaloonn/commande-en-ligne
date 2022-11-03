import "./product-card.scss";

export function ProductCardComponent() {
  return (
    <div className="product-card">
      <div className="product-card-content">
        <div className="product-card-content-title">BUSTINA PARMA</div>
        <div className="product-card-content-ingredients">
          Crème de parmigiano reggiano 22 mois AOP, mozza fior di latte,
          gorgonzola doux AOP, provolone fumé, pecorino AOP, poivre noir
        </div>
        <div className="product-card-content-price">44.00 €</div>
      </div>
      <div className="product-card-image">
        <img src="" alt="" />
      </div>
    </div>
  );
}
