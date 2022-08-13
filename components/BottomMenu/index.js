import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProductsList from "../ProductsList";
import Cart from "../Cart";
import Orders from "../Orders";

const ProductsRoute = () => <ProductsList />;

const CartRoute = ({ route }) => <Cart index={route.props} />;

const OrdersRoute = ({ route }) => <Orders index={route.props} />;

const ProfileRoute = () => <Text>Profile</Text>;

const BottomMenu = () => {
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
      props: index,
    },
    {
      key: "orders",
      title: "Orders",
      icon: (props) => <FontAwesome5 {...props} name="clipboard-list" />,
      props: index,
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
