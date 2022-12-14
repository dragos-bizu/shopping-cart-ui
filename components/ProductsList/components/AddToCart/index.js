import React, { useState } from "react";
import { Button, Dialog, Divider, RadioButton, Text } from "react-native-paper";
import { View } from "react-native";
import addToCartStyles from "./styles";
import { useSelector } from "react-redux";
import ajax from "../../../../services/fetch";
import DialogBox from "../../../DialogBox";

const AddToCart = ({ visible, hideDialog, sizes, productId }) => {
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
    <DialogBox
      visible={visible}
      hideDialog={hideDialog}
      title={"Select your Size"}
    >
      <Dialog.Content>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <Divider />
          <RadioButton.Item
            label={
              <View style={addToCartStyles.radioButtonLabelStyle}>
                <Text>XS</Text>
                <Text
                  style={
                    sizes.XS
                      ? addToCartStyles.textInStockStyle
                      : addToCartStyles.textOutOfStockStyle
                  }
                >
                  {sizes.XS ? "In Stock" : "Out of Stock"}
                </Text>
              </View>
            }
            value="xs"
            disabled={!sizes.XS}
          />
          <Divider />
          <RadioButton.Item
            label={
              <View style={addToCartStyles.radioButtonLabelStyle}>
                <Text>S</Text>
                <Text
                  style={
                    sizes.S
                      ? addToCartStyles.textInStockStyle
                      : addToCartStyles.textOutOfStockStyle
                  }
                >
                  {sizes.S ? "In Stock" : "Out of Stock"}
                </Text>
              </View>
            }
            value="s"
            disabled={!sizes.S}
          />
          <Divider />
          <RadioButton.Item
            label={
              <View style={addToCartStyles.radioButtonLabelStyle}>
                <Text>M</Text>
                <Text
                  style={
                    sizes.M
                      ? addToCartStyles.textInStockStyle
                      : addToCartStyles.textOutOfStockStyle
                  }
                >
                  {sizes.M ? "In Stock" : "Out of Stock"}
                </Text>
              </View>
            }
            value="m"
            disabled={!sizes.M}
          />
          <Divider />
          <RadioButton.Item
            label={
              <View style={addToCartStyles.radioButtonLabelStyle}>
                <Text>L</Text>
                <Text
                  style={
                    sizes.L
                      ? addToCartStyles.textInStockStyle
                      : addToCartStyles.textOutOfStockStyle
                  }
                >
                  {sizes.L ? "In Stock" : "Out of Stock"}
                </Text>
              </View>
            }
            value="l"
            disabled={!sizes.L}
          />
          <Divider />
          <RadioButton.Item
            label={
              <View style={addToCartStyles.radioButtonLabelStyle}>
                <Text>XL</Text>
                <Text
                  style={
                    sizes.XL
                      ? addToCartStyles.textInStockStyle
                      : addToCartStyles.textOutOfStockStyle
                  }
                >
                  {sizes.XL ? "In Stock" : "Out of Stock"}
                </Text>
              </View>
            }
            value="xl"
            disabled={!sizes.XL}
          />
          <Divider />
        </RadioButton.Group>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={addToCart}>Add to Cart</Button>
        <Button onPress={hideDialog}>Cancel</Button>
      </Dialog.Actions>
    </DialogBox>
  );
};

export default AddToCart;
