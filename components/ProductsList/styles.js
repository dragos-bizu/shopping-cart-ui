import { StyleSheet } from "react-native";

const productsListStyles = StyleSheet.create({
  pageTextStyle: {
    margin: 8,
    textAlign: "center",
  },
  pageBottomStyle: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchStyle: {
    padding: 10,
    flexDirection: "row",
  },
  searchInputStyle: {
    height: 40,
    width: "77%",
  },
  searchButtonStyle: {
    height: "100%",
  },
});

export default productsListStyles;
