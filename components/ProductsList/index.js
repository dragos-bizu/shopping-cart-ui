import React, { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import { ScrollView, View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import ajax from "../../services/fetch";
import DialogBox from "../DialogBox";
import productsListStyles from "./styles";

const ProductsList = () => {
  const scrollRef = useRef();
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [sizes, setSizes] = useState({});
  const [productId, setProductId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [url, setUrl] = useState("/api/products/all/");
  const [searchTerm, setSearchTerm] = useState("");

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const requestProducts = {
    url: url,
    method: "GET",
    body: null,
  };
  useEffect(() => {
    ajax(requestProducts).then((response) => {
      setProducts(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    });
  }, [url]);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setUrl(`/api/products/all/?page=${currentPage - 1}`);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setUrl(`/api/products/all/?page=${currentPage + 1}`);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const searchProducts = () => {
    setUrl(`/api/products/all/?search=${searchTerm}`);
  };
  return (
    <>
      <ScrollView ref={scrollRef}>
        <View style={productsListStyles.searchStyle}>
          <TextInput
            placeholder={"Search..."}
            style={productsListStyles.searchInputStyle}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <Button
            onPress={searchProducts}
            style={productsListStyles.searchButtonStyle}
          >
            SEARCH
          </Button>
        </View>
        {products.map((product, index) => (
          <Product
            product={product}
            key={index}
            showDialog={showDialog}
            setSizes={setSizes}
            setProductId={setProductId}
          />
        ))}
        <View style={productsListStyles.pageBottomStyle}>
          <Button disabled={currentPage === 1} onPress={prevPage}>
            Prev
          </Button>
          <Text style={productsListStyles.pageTextStyle}>
            Page {currentPage}/{totalPages}
          </Text>
          <Button disabled={currentPage === totalPages} onPress={nextPage}>
            Next
          </Button>
        </View>
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
