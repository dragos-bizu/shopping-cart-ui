import React, { useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import ajax from "../../services/fetch";

const DialogBox = ({ visible, hideDialog, sizes, productId }) => {
  const [value, setValue] = useState("m");
  const token = useSelector((state) => state.data.token);

  const addToCart = () => {
    const sizeId = `${value.toUpperCase()}_id`;
    const requestPostCart = {
      url: "/api/cart/add/",
      method: "POST",
      body: {
        product: productId,
        product_size: sizes[sizeId],
        quantity: 1,
      },
      token: token,
    };
    ajax(requestPostCart)
      .then((response) => {
        console.log(response);
        hideDialog();
      })
      .catch(async (error) => {
        const errorBody = await error;
        console.log(errorBody);
      });
  };

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Size</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}
            >
              <RadioButton.Item
                label={`XS - ${sizes.XS ? "In Stock" : "Out of Stock"}`}
                value="xs"
                disabled={!sizes.XS}
              />
              <RadioButton.Item
                label={`S - ${sizes.S ? "In Stock" : "Out of Stock"}`}
                value="s"
                disabled={!sizes.S}
              />
              <RadioButton.Item
                label={`M - ${sizes.M ? "In Stock" : "Out of Stock"}`}
                value="m"
                disabled={!sizes.M}
              />
              <RadioButton.Item
                label={`L - ${sizes.L ? "In Stock" : "Out of Stock"}`}
                value="l"
                disabled={!sizes.L}
              />
              <RadioButton.Item
                label={`XL - ${sizes.XL ? "In Stock" : "Out of Stock"}`}
                value="xl"
                disabled={!sizes.XL}
              />
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={addToCart}>Add to Cart</Button>
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogBox;
