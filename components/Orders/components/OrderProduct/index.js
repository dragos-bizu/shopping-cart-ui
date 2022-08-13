import React from "react";
import { Card, Divider, Paragraph, Text } from "react-native-paper";
import orderProductStyles from "./styles";
import { View } from "react-native";

const OrderProduct = ({ product }) => {
  const orderProduct = product.product;
  const productSize = product.product_size;

  return (
    <Card style={orderProductStyles.cardStyle}>
      <Card.Title
        title={
          <View style={orderProductStyles.cardTitleTextStyle}>
            <Text style={orderProductStyles.orderProductNameStyle}>
              {orderProduct.name}
            </Text>
          </View>
        }
        style={orderProductStyles.cardTitleStyle}
      />
      <Divider />
      <Card.Content style={orderProductStyles.cardContentStyle}>
        <Paragraph>
          <Text style={orderProductStyles.textStyle}>Description: </Text>
          {orderProduct.description}
        </Paragraph>
        <Paragraph>
          <Text style={orderProductStyles.textStyle}>Price: </Text>
          {orderProduct.price}$
        </Paragraph>
        <Paragraph>
          <Text style={orderProductStyles.textStyle}>Size: </Text>
          {productSize.size}
        </Paragraph>
        <Paragraph>
          <Text style={orderProductStyles.textStyle}>Status: </Text>
          <Text
            style={
              product.status === "Ordered"
                ? { color: "#0ebb00" }
                : { color: "#ff0000" }
            }
          >
            {product.status}
          </Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default OrderProduct;
