import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import HeaderImage from "../components/HeaderImage";
import ChoiceCard from "../components/UserShopChoices";
import { fetchShop } from "../features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import CircularIndicator from "../components/CircularIndicator";
import { theme } from "../core/theme";

export default function HomeScreen({ navigation }) {
  const status = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  function sendShopRequest() {
    dispatch(fetchShop());
    navigation.navigate("SearchShopScreen");
  }

  if (status.loading == true) {
    return <CircularIndicator />;
  } else if (status.error) {
    return (
      <View style={{ alignItems: "center" }}>
        <Feather
          name="x"
          size={60}
          color="red"
          style={{
            marginTop: theme.dimensions.windowHeight / 2.5,
          }}
        />
        <Header>Access Denied: Please enter the valid credentials</Header>
      </View>
    );
  } else
    return (
      <ScrollView>
        <View style={styles.background}>
          <Background>
            <HomeCard
              style={{ marginTop: -10 }}
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

            <HomeCard
              heading={"Search your desired shop here"}
              description={
                "Tap on the following button to proceed to the Search Page"
              }
              uri={
                "https://www.groovecommerce.com/hubfs/ecommerce-site-search.jpg"
              }
            />
            <Button onPress={sendShopRequest} mode="contained">
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
