import React, { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import loginStyles from "./styles";
import { Text, TouchableHighlight } from "react-native";

const Login = () => {
  const [isPress, setIsPress] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAction = () => {
    console.log("Login Pressed");
  };

  const signupLink = {
    activeOpacity: 1,
    underlayColor: "rgba(255,255,255,0)",
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("SignUp"),
  };
  return (
    <>
      <Card style={loginStyles.cardContent}>
        <Card.Title title="LogIn" />
        <Card.Content>
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            style={loginStyles.textInput}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            style={loginStyles.textInput}
          />
          <Button
            mode="contained"
            style={loginStyles.button}
            onPress={loginAction}
          >
            LogIn
          </Button>
          <TouchableHighlight {...signupLink}>
            <Text
              style={
                isPress ? loginStyles.signupTextPress : loginStyles.signupText
              }
            >
              Don't have an account? SignUp.
            </Text>
          </TouchableHighlight>
        </Card.Content>
      </Card>
    </>
  );
};

export default Login;
