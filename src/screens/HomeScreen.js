import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import HeaderImage from "../components/HeaderImage";
import ChoiceCard from "../components/UserShopChoices";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Background>
          <HeaderImage
            style={{ marginTop: -10 }}
            uri={
              "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RvcmV8ZW58MHx8MHx8&w=1000&q=80"
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
              "https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
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
              "https://www.groovecommerce.com/hubfs/ecommerce-site-search.jpg"
            }
          />
          <Button
            onPress={() => navigation.navigate("SearchShopScreen")}
            mode="contained"
          >
            Find Shop
          </Button>
        </Background>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: '100%',
    // backgroundColor: '#C41B3E',
  },
});
