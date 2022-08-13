import React, { useState } from "react";
import { ScrollView } from "react-native";
import OrderProduct from "../OrderProduct";
import ReturnProduct from "../ReturnProduct";

const OrderItemDetails = ({ route }) => {
  const orderItem = route.params.orderItem;
  const [visible, setVisible] = useState(false);
  const [orderItemId, setOrderItemId] = useState(0);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <>
      <ScrollView>
        {orderItem.get_items.map((product, index) => (
          <OrderProduct
            product={product}
            key={index}
            showDialog={showDialog}
            setOrderItemId={setOrderItemId}
          />
        ))}
      </ScrollView>
      <ReturnProduct
        hideDialog={hideDialog}
        visible={visible}
        orderItemId={orderItemId}
      />
    </>
  );
};

export default OrderItemDetails;
