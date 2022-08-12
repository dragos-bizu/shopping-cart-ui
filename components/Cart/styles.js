import { StyleSheet } from "react-native";

const cartStyles = StyleSheet.create({
  cardStyle: {
    margin: 7,
  },
  pageBottomStyle: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalPriceTextStyle: {
    fontWeight: "bold",
    fontSize: 17,
    margin: 10,
    width: "95%",
    textAlign: "center",
    backgroundColor: "rgba(52,152,219,0.5)",
    padding: 15,
  },
});

export default cartStyles;
