import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { theme } from "../core/theme";
import Header from "./Header";
import { Rating, AirbnbRating } from "react-native-ratings";

import Paragraph from "./Paragraph";
export default function ChoiceCard({
  mode,
  style,
  uri,
  heading,
  description,
  reviews,
  ...props
}) {
  const res = props.data;

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{
          uri: res?.images[0],
        }}
      />

      <AirbnbRating
        showRating={false}
        starContainerStyle={{ marginTop: 20 }}
        count={5}
        defaultRating={res?.reviews.length}
        size={18}
      />

      <Header> {res?.title} </Header>
      <Text style={styles.text}>Status: {res?.status}</Text>
      <Text style={styles.text}>Creator: {res?.createdBy?.name}</Text>
      <Text style={styles.text}>Company: {res?.company}</Text>
      <Text style={styles.text}>Budget: {res?.budget}</Text>
      <Text style={styles.text}>----------------------------------------</Text>

      <Paragraph>{res?.description}</Paragraph>
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
    color: theme.colors.error,
    textAlign: "center",
    margin: 3,
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
