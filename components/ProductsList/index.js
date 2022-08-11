import React, { useState } from "react";
import Product from "./components/Product";
import { ScrollView } from "react-native";
import ajax from "../../services/fetch";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const requestProducts = {
    url: "/api/products/all",
    method: "GET",
    body: null,
  };

  ajax(requestProducts).then((response) => {
    setProducts(response.results);
  });

  return (
    <ScrollView>
      {products.map((result, index) => (
        <Product product={result} key={index} />
      ))}
    </ScrollView>
  );
};

export default ProductsList;
