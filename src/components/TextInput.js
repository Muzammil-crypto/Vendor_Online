import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";

export default function TextInput({ errorText, description, style, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={(styles.input, style)}
        selectionColor={theme.colors.primary}
        underlineColor={theme.colors.primary}
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    // backgroundColor: theme.colors.surface,
    underlineColor: theme.colors.primary,

    height: 45,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
