import React, { useState } from "react";
import Product from "./components/Product";
import { ScrollView } from "react-native";
import ajax from "../../services/fetch";
import DialogBox from "../DialogBox";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [sizes, setSizes] = useState({});
  const [productId, setProductId] = useState(0);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const requestProducts = {
    url: "/api/products/all",
    method: "GET",
    body: null,
  };

  ajax(requestProducts).then((response) => {
    setProducts(response.results);
  });

  return (
    <>
      <ScrollView>
        {products.map((result, index) => (
          <Product
            product={result}
            key={index}
            showDialog={showDialog}
            setSizes={setSizes}
            setProductId={setProductId}
          />
        ))}
      </ScrollView>
      <DialogBox
        visible={visible}
        setVisible={setVisible}
        hideDialog={hideDialog}
        sizes={sizes}
        productId={productId}
      />
    </>
  );
};

export default ProductsList;
