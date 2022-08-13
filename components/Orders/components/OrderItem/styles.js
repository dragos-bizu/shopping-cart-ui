import { StyleSheet } from "react-native";

const orderItemStyles = StyleSheet.create({
  cardStyle: {
    margin: 7,
  },
  cardTitleStyle: {
    backgroundColor: "rgba(52,152,219,0.5)",
  },
  textStyle: {
    fontWeight: "bold",
  },
  cardContentStyle: {
    padding: 10,
  },
  cardTitleTextStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
  },
  createdAtTextStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  orderTitleNameStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default orderItemStyles;
