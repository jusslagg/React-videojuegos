import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-content">
        {/* Enlace a la página principal con el logo "GameSphere" */}
        <Link to="/" className="game-sphere-logo">
          GameSphere
        </Link>

        {/* Listado de categorías clickeables */}
        <ul>
          {categories.slice(1).map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>

        <Link to="/cart">
          <CartWidget />
        </Link>

        <button onClick={toggleMode} className="toggle-button">
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
