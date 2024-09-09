import ShopIcon from "@mui/icons-material/Shop";
import Badge from "@mui/material/Badge";
const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShopIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
