import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import HeaderImage from "../components/HeaderImage";
import { Feather } from "@expo/vector-icons";

import { theme } from "../core/theme";
import Paragraph from "../components/Paragraph";
import OrderDetailScreen from "./orderDetailsForm";

export default function ProductDetails({ navigation }) {
  const Windowheight = theme.dimensions.windowHeight;
  const WindowWidth = theme.dimensions.windowWidth;
  return (
    <View style={styles.background}>
      <ScrollView>
        <Background>
          <HeaderImage
            style={{
              marginBottom: Windowheight * 0.01,
              marginVertical: -Windowheight * 0.015,
            }}
            uri={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
            }
          />

          <View style={{ height: theme.dimensions.windowHeight / 2 }}>
            <Header>Multaani Mangoes</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus enim at magna congue dapibus. Maecenas porta, velit ac
              tempus laoreet, quam turpis bibendum metus, nec
            </Paragraph>
            <Text style={styles.Text}>Title: Multaani Mangoes</Text>
            <Text style={styles.Text}>price: 50$</Text>
          </View>
          <View>
            <View>
              <Button
                onPress={() => navigation.navigate("OrderDetailScreen")}
                style={{ width: theme.dimensions.windowWidth * 0.9 }}
                mode="contained"
              >
                Add to cart
              </Button>
            </View>
          </View>
        </Background>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },

  image: {
    width: 320,
    height: 200,
    borderRadius: 20,
    marginLeft: 0,
    marginRight: 10,
  },
  ProductImage: {
    width: 160,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
    flexDirection: "row",
  },
  Text: {
    color: theme.colors.primary,
  },
  secondProduct: {
    flex: 1,
    width: 160,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
  },
});
