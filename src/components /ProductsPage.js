import React from "react";
import axios from "axios";
import { useState } from "react";
import Product from "./Product";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    return await axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  };

  return (
    <React.Fragment>
      <button onClick={() => getProducts()}>make api call</button>
      <ul>
        {products.map((product) => {
          const { title, rating, price } = product;
          return <Product title={title} rating={rating} price={price} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProductsPage;
