import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { theme } from "../core/theme";
import Header from "./Header";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function ChoiceCard({
  mode,
  style,
  uri,
  heading,
  description,
  reviews,
  ...props
}) {
  const showReviews = reviews;
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      {showReviews ? (
        <AirbnbRating
          showRating={false}
          starContainerStyle={{ marginTop: 20 }}
          count={5}
          reviews={["Not recommended", "Bad", "Average", "Good", "Very Good"]}
          defaultRating={5}
          size={18}
        />
      ) : (
        <Text> </Text>
      )}
      <Header> {heading} </Header>
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
