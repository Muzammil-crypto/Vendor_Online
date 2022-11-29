import { React, useEffect } from "react";
import { Feather } from "@expo/vector-icons";

import { StyleSheet, View } from "react-native";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { theme } from "../core/theme";
import { fetchUserInfo } from "../features/user/userActions";
import { useDispatch } from "react-redux";
export default function StartScreen({ navigation }) {
  const dispatch = useDispatch();
  function sendUserInfoRequeste() {
    dispatch(fetchUserInfo());
    navigation.navigate("Profile");
  }
  return (
    <View style={styles.background}>
      <Background>
        <Feather
          name="shopping-cart"
          size={100}
          color="white"
          style={{ marginBottom: theme.dimensions.windowHeight * 0.08 }}
        />

        <View style={styles.container}>
          <Header>Welcome</Header>
          <Paragraph>
            Eat local; Give local; for neighborhood farmer’s market
          </Paragraph>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Sign Up
          </Button>
          <Button mode="contained" onPress={sendUserInfoRequeste}>
            Profile
          </Button>
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
  container: {
    borderRadius: 18,
    height: "55%",
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
