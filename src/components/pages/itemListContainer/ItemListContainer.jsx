import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  const { categoryName } = useParams(); // {} -- { categoryName }
  console.log(categoryName);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        "entro en el catch ", error;
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
