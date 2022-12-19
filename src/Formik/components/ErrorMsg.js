import React from "react";
import { Text } from "react-native";
import { theme } from "../../core/theme";
export default function ErrorMsg({ value }) {
  return (
    <Text style={{ fontSize: 10, color: theme.colors.error }}>{value}</Text>
  );
}
