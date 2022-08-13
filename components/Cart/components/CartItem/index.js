import React from "react";
import { Card, Divider, IconButton, Paragraph, Text } from "react-native-paper";
import cartItemStyles from "./styles";
import { View } from "react-native";

const CartItem = ({ item, showDialog, setCartItemId }) => {
  const product = item.product;
  const productSize = item.product_size;

  const removeFromCart = () => {
    setCartItemId(item.id);
    showDialog();
  };

  return (
    <Card style={cartItemStyles.cardStyle}>
      <Card.Title
        title={
          <View style={cartItemStyles.cardTitleTextStyle}>
            <Text style={cartItemStyles.cartItemNameStyle}>{product.name}</Text>
            <Text style={cartItemStyles.deliveryTextStyle}>
              <Text style={{ fontWeight: "normal", color: "#fff" }}>
                Delivery Time:{" "}
              </Text>
              {product.delivery_time_days} days
            </Text>
          </View>
        }
        style={cartItemStyles.cardTitleStyle}
      />
      <Divider />
      <Card.Content style={cartItemStyles.cardContentStyle}>
        <Paragraph>
          <Text style={cartItemStyles.textStyle}>Description: </Text>
          {product.description}
        </Paragraph>
        <Paragraph>
          <Text style={cartItemStyles.textStyle}>Price: </Text>
          {product.price}$
        </Paragraph>
        <Paragraph>
          <Text style={cartItemStyles.textStyle}>Size: </Text>
          {productSize.size}
        </Paragraph>
      </Card.Content>
      <Card.Actions style={cartItemStyles.cardActionsStyle}>
        <IconButton
          icon="delete-forever-outline"
          onPress={removeFromCart}
          style={cartItemStyles.iconButtonStyle}
          color="#ff0000"
          size={25}
        />
      </Card.Actions>
    </Card>
  );
};

export default CartItem;
