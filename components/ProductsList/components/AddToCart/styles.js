import { StyleSheet } from "react-native";

const addToCartStyles = StyleSheet.create({
  radioButtonLabelStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
  },
  textInStockStyle: {
    color: "#0ebb00",
  },
  textOutOfStockStyle: {
    color: "#ff0000",
  },
});

export default addToCartStyles;
