import React from "react";
import { StyleSheet, Image } from "react-native";
import { theme } from "../core/theme";

export default function HeaderImage({ mode, style, uri, ...props }) {
  return (
    <Image
      style={[styles.image, style]}
      {...props}
      source={{
        uri: uri,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    alignItems: "flex-start",
    height: theme.dimensions.windowHeight * 0.3,
    width: theme.dimensions.windowWidth,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
