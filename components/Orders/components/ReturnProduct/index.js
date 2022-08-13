import React from "react";
import { Button, Dialog, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import ajax from "../../../../services/fetch";
import DialogBox from "../../../DialogBox";

const RemoveFromCart = ({ visible, hideDialog, orderItemId }) => {
  const token = useSelector((state) => state.data.token);

  const returnProduct = () => {
    const requestReturnCart = {
      url: "/api/order/return/",
      method: "POST",
      body: {
        order_item_id: orderItemId,
      },
      token: token,
    };
    ajax(requestReturnCart)
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
      title={"Return a Product"}
    >
      <Dialog.Content>
        <Paragraph>Are you sure you want to return this product?</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={returnProduct}>Return Product</Button>
        <Button onPress={hideDialog}>Cancel</Button>
      </Dialog.Actions>
    </DialogBox>
  );
};

export default RemoveFromCart;
