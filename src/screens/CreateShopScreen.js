import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";

//Components
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import GalleryImagecomp from "../components/GalleryImage";

const Products = [
  {
    Pname: "Strawberry",
    price: 50,
    productImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg",
  },
  {
    Pname: "lela",
    price: 50,
    productImage:
      "https://cdn.shopify.com/s/files/1/0572/1187/9601/products/DayFreshStrawberryFruitYougrt100g.jpg?v=1635249203",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg?w=1155&h=1528",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjILQJdc_Ch9p0lq_IuegZ4aeULr8_Jea4Gx0K2HCJlyPhH6dF_brPTR-H3rp7IUNFUo&usqp=CAU",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s",
  },
];

export default function CreateShopScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  const [images, setImage] = useState([]);
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === "granted");
    })();
  }, []);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 10,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[3] ? [result.assets[3]] : result.selected);
    }
  };

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
          <Header>UPLOAD YOUR SHOP</Header>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={pickImage}>
              <Feather
                name="plus"
                size={50}
                color={theme.colors.secondary}
                style={{
                  marginBottom: 10,
                  borderWidth: 0.75,
                  borderRadius: 8,
                  borderColor: theme.colors.primary,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                height: theme.dimensions.windowHeight / 3,
                // backgroundColor: 'green',
              }}
            >
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                // keyExtractor={(_, i) => i.toString()}
                contentContainerStyle={{
                  marginVertical: 50,
                  paddingBottom: 50,
                  height: theme.dimensions.windowHeight,
                  width: 400,
                }}
                data={images}
                renderItem={({ item }) => (
                  <GalleryImagecomp gip={item} />
                  // <Text>{item.uri}</Text>
                )}
              />
            </View>
          </View>
          <TextInput label="Shop Title" />
          <TextInput label="Company" />
          <TextInput label="Location" />
          <TextInput label="Buget" />
          <TextInput style={{ height: 100 }} label="Description" />

          <SafeAreaView></SafeAreaView>
          <Button mode={"contained"}>Post Shop</Button>
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
  checkboxView: {
    flexDirection: "row",
    width: theme.dimensions.windowWidth,
  },
  checkboxColumnView: {
    flexDirection: "column",
    width: theme.dimensions.windowWidth * 1.28,
  },
  container: {
    borderRadius: 18,
    height: "40%",
    backgroundColor: "white",
    width: "95%",
    maxWidth: 320,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
