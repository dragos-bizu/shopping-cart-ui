import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProductsList from "../ProductsList";

const ProductsRoute = () => <ProductsList />;

const CartRoute = () => <Text>Cart</Text>;

const OrdersRoute = () => <Text>Orders</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const BottomMenu = (props) => {
  const [index, setIndex] = React.useState(0);
  const routes = [
    {
      key: "products",
      title: "Products",
      icon: (props) => <FontAwesome5 {...props} name="boxes" />,
    },
    {
      key: "cart",
      title: "Cart",
      icon: (props) => <FontAwesome {...props} name="shopping-cart" />,
    },
    {
      key: "orders",
      title: "Orders",
      icon: (props) => <FontAwesome5 {...props} name="clipboard-list" />,
    },
    {
      key: "profile",
      title: "Profile",
      icon: (props) => <FontAwesome {...props} name="user" />,
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    products: ProductsRoute,
    cart: CartRoute,
    orders: OrdersRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={"#ffffff"}
      inactiveColor={"#c2c2c2"}
    />
  );
};

export default BottomMenu;
