import { Link } from "react-router-dom";

export function NavBarComponent() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-title">Thomas Pizza</div>
      <div className="nav-bar-links">
        <Link to={"#"}>Antipasti</Link>
      </div>
    </div>
  );
}
