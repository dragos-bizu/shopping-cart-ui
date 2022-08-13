import React from "react";
import { Button, Dialog, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import ajax from "../../../../services/fetch";
import DialogBox from "../../../DialogBox";

const RemoveFromCart = ({ visible, hideDialog, cartItemId }) => {
  const token = useSelector((state) => state.data.token);

  const removeFromCart = () => {
    const requestDeleteCart = {
      url: "/api/cart/add/",
      method: "DELETE",
      body: {
        cart_item_id: cartItemId,
      },
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
      title={"Remove from Cart"}
    >
      <Dialog.Content>
        <Paragraph>
          Are you sure you want to remove this item from cart?
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={removeFromCart}>Remove from Cart</Button>
        <Button onPress={hideDialog}>Cancel</Button>
      </Dialog.Actions>
    </DialogBox>
  );
};

export default RemoveFromCart;
