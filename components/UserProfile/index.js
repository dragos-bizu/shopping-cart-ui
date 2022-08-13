import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ajax from "../../services/fetch";
import { Card, Paragraph, Text } from "react-native-paper";
import walletStyles from "./styles";

const UserProfile = ({ index }) => {
  const [userProfile, setUserProfile] = useState({});
  const token = useSelector((state) => state.data.token);

  const requestUserProfile = {
    url: "/api/auth/me",
    method: "GET",
    body: null,
    token: token,
  };

  useEffect(() => {
    ajax(requestUserProfile).then((response) => {
      setUserProfile(response);
    });
  }, [index]);

  return (
    <Card style={walletStyles.cardStyle}>
      <Card.Title
        title={userProfile.name}
        style={walletStyles.cardTitleStyle}
      />
      <Card.Content style={walletStyles.cardContentStyle}>
        <Paragraph>
          <Text style={walletStyles.cardTextStyle}>Wallet: </Text>
          {userProfile.wallet}$
        </Paragraph>
        <Paragraph>
          <Text style={walletStyles.cardTextStyle}>Address: </Text>
          {userProfile.address}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default UserProfile;
