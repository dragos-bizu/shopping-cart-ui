import { StyleSheet } from "react-native";

const cartItemStyles = StyleSheet.create({
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
  cardActionsStyle: {
    justifyContent: "flex-end",
    marginTop: -50,
  },
  cardTitleTextStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
  },
  cartItemNameStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  deliveryTextStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default cartItemStyles;
