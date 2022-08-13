import React from "react";
import { ScrollView } from "react-native";
import OrderProduct from "../OrderProduct";

const OrderItemDetails = ({ route }) => {
  const orderItem = route.params.orderItem;
  return (
    <ScrollView>
      {orderItem.get_items.map((product, index) => (
        <OrderProduct product={product} key={index} />
      ))}
    </ScrollView>
  );
};

export default OrderItemDetails;
