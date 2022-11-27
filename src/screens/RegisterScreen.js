import React, { useState } from "react";
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
import { ScrollView } from "react-native-gesture-handler";
import CheckBox from "../components/CheckBox";
import { confirmPasswordValidator } from "../helpers/confirmPasswordValidator";
import { Formik } from "formik";
import * as Yup from "yup";

//**************************************************** */
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("email"),
  password: Yup.string()
    .required("password should be minimum 8character!!!")
    .min(6),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  name: Yup.string().required().label("name"),
});

//**************************************************** */
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const dispatch = useDispatch();
  let is18Plus = false;
  let agreeTerms = false;

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
      agreeTerms,
    };
    debugger;
    if (agreeTerms === true) {
      console.log("Executing");
      dispatch(registerUser(data));
    } else {
      return Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <ScrollView>
      <Background>
        <Logo />
        {/* <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => {
            return (
              <> */}
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
        {/* </> */}
        {/* );
          }} */}

        <TouchableOpacity onPress={(is18Plus = true)}>
          <CheckBox caption={"Are you above 18 ?"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(agreeTerms = true)}>
          <CheckBox caption={"Agree to Terms and Conditions "} />
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: theme.dimensions.windowHeight * 0.03 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* </Formik> */}
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
