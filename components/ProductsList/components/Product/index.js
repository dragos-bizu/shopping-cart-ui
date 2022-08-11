import React, { useState } from "react";
import { Card, Divider, IconButton, Paragraph, Text } from "react-native-paper";
import productStyles from "./styles";

const Product = ({ product, showDialog, setSizes, setProductId }) => {
  const addToCart = () => {
    setSizes(product.get_sizes);
    setProductId(product.id);
    showDialog();
  };

  return (
    <Card style={productStyles.cardStyle}>
      <Card.Title title={product.name} style={productStyles.cardTitleStyle} />
      <Divider />
      <Card.Content style={productStyles.cardContentStyle}>
        <Paragraph>
          <Text style={productStyles.textStyle}>Price:</Text>
          {product.price}$
        </Paragraph>
        <Paragraph>
          <Text style={productStyles.textStyle}>Description: </Text>
          {product.description}
        </Paragraph>
        <Paragraph>
          <Text style={productStyles.textStyle}>Delivery Time: </Text>
          {product.delivery_time_days} days
        </Paragraph>
      </Card.Content>
      <Card.Actions style={productStyles.cardActionsStyle}>
        <IconButton
          icon="cart-plus"
          onPress={addToCart}
          style={productStyles.iconButtonStyle}
        />
      </Card.Actions>
    </Card>
  );
};

export default Product;
