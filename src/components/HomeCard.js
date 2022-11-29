import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { theme } from "../core/theme";
import Header from "./Header";
export default function HomeCard({
  style,
  uri,
  heading,
  description,
  ...props
}) {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />

      <Header>{heading} </Header>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    borderRadius: 12,
    height: theme.dimensions.windowHeight * 0.3,
    width: theme.dimensions.windowWidth * 0.8,
  },
  text: {
    color: theme.colors.secondary,
    textAlign: "center",
  },
  view: {
    margin: "1%",
    marginTop: theme.dimensions.windowHeight * 0.05,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 8,
    borderColor: theme.colors.primary,
    paddingBottom: 10,
  },
});
