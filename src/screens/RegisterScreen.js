import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../features/user/userActions";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { nameValidator } from "../helpers/nameValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { ScrollView, State } from "react-native-gesture-handler";
import { confirmPasswordValidator } from "../helpers/confirmPasswordValidator";
import CircularIndicator from "../components/CircularIndicator";

export default function RegisterScreen({ navigation }) {
  const status = useSelector((state) => state.user);

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const dispatch = useDispatch();
  let is18Plus = true;

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = confirmPasswordValidator(
      confirmPassword.value,
      password.value
    );
    if (emailError || passwordError || nameError || confirmPasswordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
    }

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      is18Plus,
    };

    dispatch(registerUser({ data, navigation }));
    (email.value = ""), (password.value = "");
    (name.value = ""), (confirmPassword.value = "");
  };
  if (status.loading == true) {
    return <CircularIndicator />;
  } else
    return (
      <ScrollView>
        <Background>
          <Logo />

          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />
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
          <TextInput
            label="confirmPassword"
            returnKeyType="done"
            value={confirmPassword.value}
            onChangeText={(text) =>
              setConfirmPassword({ value: text, error: "" })
            }
            error={!!confirmPassword.error}
            errorText={confirmPassword.error}
            secureTextEntry
          />

          <Button
            mode="contained"
            onPress={onSignUpPressed}
            style={{ marginTop: theme.dimensions.windowHeight * 0.03 }}
          >
            Sign Up
          </Button>
          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </Background>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: theme.dimensions.windowHeight * 0.001,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
