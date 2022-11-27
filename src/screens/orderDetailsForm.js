import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Components
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";

export default function OrderDetailScreen({ navigation }) {
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
          <Header>UPLOAD YOUR DETAILS</Header>

          <TextInput label="Name" />
          <TextInput label="Address" />
          <TextInput label="Mobile" />
          <TextInput label="CNIC" />

          <Button
            onPress={() => navigation.navigate("CheckOutScreen")}
            mode={"contained"}
          >
            Continue order
          </Button>
        </Background>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    borderRadius: 18,
    height: "40%",
    backgroundColor: "white",
    width: theme.dimensions.windowWidth,
    // maxWidth: 320,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
