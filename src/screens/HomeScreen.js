import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import HeaderImage from "../components/HeaderImage";
import ChoiceCard from "../components/UserShopChoices";
import { theme } from "../core/theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ScrollView>
        <Background>
          <HeaderImage
            style={{ marginTop: -10 }}
            uri={
              "https://img.freepik.com/premium-vector/flea-market-scene-cartoon-style_1639-32086.jpg?w=2000"
            }
          />
          <Header>Explore the best shops and the sellers </Header>
          <ChoiceCard
            heading={
              "Create your very first shop on vendor online and start your journey"
            }
            description={
              "Tap on the following button to proceed to the Shop Registration Page"
            }
            uri={
              "https://img.freepik.com/free-vector/farmers-market-with-happy-buyer-vendors-outdoor-grocery-shopping-organic-nutrition-natural-products-fresh-fruits-vegetables-meat-sale-business_575670-1567.jpg?w=2000"
            }
          />
          <Button
            onPress={() => navigation.navigate("CreateShopScreen")}
            mode="contained"
          >
            Upload Shop
          </Button>

          <ChoiceCard
            heading={"Search your desired shop here"}
            description={
              "Tap on the following button to proceed to the Search Page"
            }
            uri={
              "https://img.freepik.com/premium-vector/flea-market-scene-cartoon-style_1639-36034.jpg?w=2000"
            }
          />
          <Button
            onPress={() => navigation.navigate("SearchShopScreen")}
            mode="contained"
          >
            Find Shop
          </Button>
        </Background>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: '100%',
    // backgroundColor: '#C41B3E',
  },
});
