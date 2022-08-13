import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import BottomMenu from "../components/BottomMenu";
import OrderProduct from "../components/Orders/components/OrderProduct";
import orderItemDetails from "../components/Orders/components/OrderItemDetails";

const headerOptions = {
  headerStyle: { backgroundColor: "#3498db" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
};

const routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={headerOptions} />
      <Stack.Screen
        name="Shopping Cart"
        component={BottomMenu}
        options={headerOptions}
      />
      <Stack.Screen
        name="Order Details"
        component={orderItemDetails}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default routes;
