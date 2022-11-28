import React from "react";
import { Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../core/theme";

export default function Logo() {
  return (
    <Feather
      name="shopping-cart"
      size={120}
      color={theme.colors.primary}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: theme.dimensions.windowHeight * 0.07,
    justifyContent: "center",
    marginBottom: 50,
  },
});
