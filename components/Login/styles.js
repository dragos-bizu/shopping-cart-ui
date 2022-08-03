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
});

export default loginStyles;
