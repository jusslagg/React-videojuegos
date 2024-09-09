import ShopIcon from "@mui/icons-material/Shop";
import "./navbar.css";

export const Navbar = () => {
  const nombre = "Jesus";

  const saludar = () => {
    console.log(`Bienvenido ${nombre}, se hace lo que se puede`);
  };

  return (
    <div>
      <h1 className="title">{nombre}</h1>
      <ul>
        <li>Xbox</li>
        <li>Playstation</li>
        <li>Nintendo</li>
        <li>PC</li>
      </ul>
      <button onClick={saludar}>Saludar</button>
      <ShopIcon />
    </div>
  );
};
