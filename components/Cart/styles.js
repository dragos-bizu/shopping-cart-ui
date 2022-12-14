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
    textAlign: "center",
  },
  checkoutStyle: {
    backgroundColor: "rgba(52,152,219,0.5)",
    padding: 15,
    width: "95%",
    margin: 10,
  },
  checkoutButtonStyle: {
    margin: 10,
    backgroundColor: "#00b400",
  },
  emptyCartTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.50)",
    textAlign: "center",
    margin: 20,
    marginTop: "75%",
  },
});

export default cartStyles;
