import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Index from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    margin: 20,
  },
});
