import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (iproduct) => {
    // Implementa la lógica para agregar un producto al carrito
  };

  const data = { cart, agregarAlCarrito }; // Asegúrate de incluir la función en el objeto data

  return (
    <CartContext.Provider value={(data, agregar)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
