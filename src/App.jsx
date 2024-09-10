import { Navbar } from "./components/Layouts/navbar/Navbar";
import ItemListContainer from "./components/Layouts/pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Como costó!!! pero se pudo!!!" />
    </div>
  );
}

export default App;
