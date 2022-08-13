import { StyleSheet } from "react-native";

const orderProductStyles = StyleSheet.create({
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
  orderProductNameStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default orderProductStyles;
