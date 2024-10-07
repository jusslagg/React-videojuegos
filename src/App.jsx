import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext"; // Asegúrate de que la ruta sea correcta
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/Layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import DarkModeProvider from "./context/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/productDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
