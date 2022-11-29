import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { theme } from "../core/theme";
import Header from "./Header";
import { Rating, AirbnbRating } from "react-native-ratings";
import { fetchShop } from "../features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.shop);
  // useEffect(() => {
  //   dispatch(fetchShop());
  // }, []);
  const showReviews = reviews;
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{
          uri: data[0]?.images[0],
        }}
      />
      {showReviews ? (
        <AirbnbRating
          showRating={false}
          starContainerStyle={{ marginTop: 20 }}
          count={5}
          reviews={["Not recommended", "Bad", "Average", "Good", "Very Good"]}
          defaultRating={data[0]?.reviews.length}
          size={18}
        />
      ) : (
        <Text> </Text>
      )}
      <Header> {data[0]?.title} </Header>
      <Paragraph>Status: {data[0]?.status}</Paragraph>
      <Paragraph>Date Created: {data[0]?.createdBy?.name}</Paragraph>
      <Paragraph>Seller-Email: {data[0]?.createdBy?.email}</Paragraph>
      <Text style={styles.text}>{data[0]?.description}</Text>
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
