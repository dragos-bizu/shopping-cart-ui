import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import ajax from "../../services/fetch";
import { useSelector } from "react-redux";
import cartStyles from "./styles";
import CartItem from "./CartItem";
import RemoveFromCart from "./RemoveFromCart";
import CheckoutCart from "./CheckoutCart";

const Cart = ({ index }) => {
  const scrollRef = useRef();
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleCheckout, setVisibleCheckout] = useState(false);
  const [cartItemId, setCartItemId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [url, setUrl] = useState("/api/cart/details/");
  const [totalPrice, setTotalPrice] = useState(0);
  const token = useSelector((state) => state.data.token);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showCheckoutDialog = () => setVisibleCheckout(true);

  const hideCheckoutDialog = () => setVisibleCheckout(false);

  const requestProducts = {
    url: url,
    method: "GET",
    body: null,
    token: token,
  };
  useEffect(() => {
    ajax(requestProducts).then((response) => {
      setItems(response.results.products);
      setTotalPrice(response.results.total_price);
      setTotalPages(Math.ceil(response.count / 10));
    });
  }, [url, index, visible, visibleCheckout]);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setUrl(`/api/cart/details/?page=${currentPage - 1}`);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setUrl(`/api/cart/details/?page=${currentPage + 1}`);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <ScrollView ref={scrollRef}>
        {items.map((item, index) => (
          <CartItem
            item={item}
            key={index}
            showDialog={showDialog}
            setCartItemId={setCartItemId}
          />
        ))}
        <View style={cartStyles.checkoutStyle}>
          <Text style={cartStyles.totalPriceTextStyle}>
            Cart Total Price: {totalPrice}$
          </Text>
          <Button
            mode="contained"
            style={cartStyles.checkoutButtonStyle}
            onPress={showCheckoutDialog}
          >
            <Text style={{ color: "#ffffff" }}>CHECKOUT</Text>
          </Button>
        </View>
        <View style={cartStyles.pageBottomStyle}>
          <Button disabled={currentPage === 1} onPress={prevPage}>
            Prev
          </Button>
          <Text style={cartStyles.pageTextStyle}>
            Page {currentPage}/{totalPages}
          </Text>
          <Button disabled={currentPage === totalPages} onPress={nextPage}>
            Next
          </Button>
        </View>
      </ScrollView>
      <RemoveFromCart
        visible={visible}
        hideDialog={hideDialog}
        cartItemId={cartItemId}
      />
      <CheckoutCart visible={visibleCheckout} hideDialog={hideCheckoutDialog} />
    </>
  );
};

export default Cart;
