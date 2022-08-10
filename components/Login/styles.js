import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    width: 250,
    marginTop: "35%",
  },
  button: {
    marginTop: 15,
  },
  signupText: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: "#1313f5",
  },
  signupTextPress: {
    marginTop: 10,
    color: "#4b4bfd",
    textDecorationLine: "none",
  },
  pageStyle: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 0,
  },
});

export default loginStyles;
