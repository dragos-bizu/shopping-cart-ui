import React from "react";
import { Button, Dialog, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import ajax from "../../../../services/fetch";
import DialogBox from "../../../DialogBox";

const CheckoutCart = ({ visible, hideDialog }) => {
  const token = useSelector((state) => state.data.token);

  const checkoutCart = () => {
    const requestDeleteCart = {
      url: "/api/cart/checkout/",
      method: "POST",
      body: null,
      token: token,
    };
    ajax(requestDeleteCart)
      .then((response) => {
        console.log(response);
        hideDialog();
      })
      .catch(async (error) => {
        const errorBody = await error.json();
        console.log(errorBody);
      });
  };

  return (
    <DialogBox
      visible={visible}
      hideDialog={hideDialog}
      title={"Cart Checkout"}
    >
      <Dialog.Content>
        <Paragraph>Are you sure you want to place this order?</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={checkoutCart}>CHECKOUT</Button>
        <Button onPress={hideDialog}>Cancel</Button>
      </Dialog.Actions>
    </DialogBox>
  );
};

export default CheckoutCart;
