import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import BottomMenu from "../components/BottomMenu";

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
    </Stack.Navigator>
  );
};

export default routes;
