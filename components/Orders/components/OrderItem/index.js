import React from "react";
import { Card, Paragraph, Text } from "react-native-paper";
import orderItemStyles from "./styles";
import { TouchableHighlight, View } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({ orderItem }) => {
  const navigation = useNavigation();

  const orderItemLink = {
    activeOpacity: 0.5,
    underlayColor: "rgba(255,255,255,0)",
    onPress: () => {
      navigation.navigate("Order Details", { orderItem: orderItem });
    },
  };
  return (
    <TouchableHighlight {...orderItemLink}>
      <Card style={orderItemStyles.cardStyle}>
        <Card.Title
          title={
            <View style={orderItemStyles.cardTitleTextStyle}>
              <Text style={orderItemStyles.orderTitleNameStyle}>Order: </Text>
              <Text style={orderItemStyles.createdAtTextStyle}>
                {moment(orderItem.created_at, "YYYY-MM-DDTHH:mm:ss.SSSZ")
                  .add(3, "hours")
                  .format("DD-MM-YYYY HH:mm")}
              </Text>
            </View>
          }
          style={orderItemStyles.cardTitleStyle}
        />
        <Card.Content style={orderItemStyles.cardContentStyle}>
          <Paragraph>
            <Text style={orderItemStyles.textStyle}>Order Total Price: </Text>
            {orderItem.total_price}$
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default OrderItem;
