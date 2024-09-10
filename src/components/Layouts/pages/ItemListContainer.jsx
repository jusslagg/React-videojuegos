import React from "react";
import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  let precio = 1200;

  return (
    <div className="item-list-container">
      <h1>Listado de productos</h1>
      <div className="product-card-container">
        <ProductCard titulo="Call Of Duty" precio={precio} />
        <ProductCard titulo="Dead by Dayligth" precio={precio} />
        <ProductCard titulo="God Of War" precio={precio} />
        <ProductCard titulo="Minecraft" precio={precio} />
        <ProductCard titulo="Vallheim" precio={precio} />
        <ProductCard titulo="Super Mario" precio={precio} />
        <ProductCard titulo="Zelda" precio={precio} />
        <ProductCard titulo="StarCraft" precio={precio} />
        <ProductCard titulo="The Last of Us" precio={precio} />
      </div>
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
