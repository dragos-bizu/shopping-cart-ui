import * as React from "react";
import { Card, Divider, IconButton, Paragraph, Text } from "react-native-paper";
import productStyles from "./styles";
import { TouchableHighlight } from "react-native";

const Product = ({ product }) => {
  const productDetailsLink = {
    activeOpacity: 0.75,
    underlayColor: "rgba(255,255,255,0)",
    onPress: () => {
      console.log(product.id);
    },
  };

  return (
    <TouchableHighlight {...productDetailsLink}>
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
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default Product;
