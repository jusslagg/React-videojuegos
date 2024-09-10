import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h2>GameSphere</h2>
        <ul>
          <li>Xbox</li>
          <li>Playstation</li>
          <li>Nintendo</li>
          <li>PC</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};
