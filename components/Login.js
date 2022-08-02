import React from "react";
import { TextInput } from "react-native-paper";

const Login = () => {
  return (
    <>
      <TextInput label="Username" mode="outlined" />
      <TextInput label="Password" secureTextEntry={true} mode="outlined" />
    </>
  );
};

export default Login;
