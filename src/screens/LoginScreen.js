import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { userLogin } from "../features/user/userActions";
import CircularIndicator from "../components/CircularIndicator";
import { Feather } from "@expo/vector-icons";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function LoginScreen({ navigation }) {
  const status = useSelector((state) => state.user);

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const dispatch = useDispatch();

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });

      return;
    }

    const data = {
      email: email.value,
      password: password.value,
    };
    dispatch(userLogin({ data, navigation }));
    (email.value = ""), (password.value = "");
    // navigation.navigate("HomeScreen");
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    });
  };
  if (status.loading == true) {
    return <CircularIndicator />;
  } else if (status.error) {
    return (
      <View style={{ alignItems: "center" }}>
        <Feather
          name="x"
          size={60}
          color="red"
          style={{
            marginTop: theme.dimensions.windowHeight / 2.5,
          }}
        />
        <Header>Access Denied: Please enter the valid credentials</Header>
      </View>
    );
  } else
    return (
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Paragraph>Don’t have an account? </Paragraph>
          <TouchableOpacity onPress={onLoginPressed}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: theme.dimensions.windowHeight * 0.07,
  },
  row: {
    flexDirection: "row",
    marginTop: theme.dimensions.windowHeight * 0.001,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
