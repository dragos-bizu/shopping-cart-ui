import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ajax from "../../services/fetch";
import { ScrollView, View } from "react-native";
import OrderItem from "./components/OrderItem";

const Orders = ({ index }) => {
  const token = useSelector((state) => state.data.token);
  const [orders, setOrders] = useState([]);

  const requestOrders = {
    url: "/api/order/",
    method: "GET",
    body: null,
    token: token,
  };

  useEffect(() => {
    ajax(requestOrders).then((response) => {
      setOrders(response);
    });
  }, [index]);

  return (
    <ScrollView>
      <View>
        {orders.map((order, index) => (
          <OrderItem orderItem={order} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Orders;
