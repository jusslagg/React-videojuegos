import { Footer } from "./components/Layouts/footer/Footer";
import { Navbar } from "./components/Layouts/navbar/Navbar";
import { Main } from "./components/main/Main";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
