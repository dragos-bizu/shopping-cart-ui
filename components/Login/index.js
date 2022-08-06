import React, { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import loginStyles from "./styles";
import { Text, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import ajax from "../../services/fetch";
import { setToken } from "../DataWrapper/state/slice";

const Login = () => {
  const [isPress, setIsPress] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginAction = () => {
    const url = "/api/auth/token/";
    const method = "POST";
    const body = {
      username: username,
      password: password,
    };
    ajax({ url, method, body }).then((response) => {
      dispatch(setToken(response.token));
    });
  };

  const signupLink = {
    activeOpacity: 1,
    underlayColor: "rgba(255,255,255,0)",
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("signup"),
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
            onChangeText={(username) => setUsername(username)}
            style={loginStyles.textInput}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            onChangeText={(password) => setPassword(password)}
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
