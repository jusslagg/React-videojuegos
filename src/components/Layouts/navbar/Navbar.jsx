import ShopIcon from "@mui/icons-material/Shop";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <h2> GameSphere </h2>
      <ul>
        <li>Xbox</li>
        <li>Playstation</li>
        <li>Nintendo</li>
        <li>PC</li>
      </ul>
      <ShopIcon />
    </div>
  );
};
