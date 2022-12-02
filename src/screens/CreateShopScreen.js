import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

import { Feather } from "@expo/vector-icons";

import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import GalleryImagecomp from "../components/GalleryImage";
import BackButton from "../components/BackButton";

export default function CreateShopScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  /////////////////////////////////////////////////
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
      selectionLimit: 6,
    });

    if (!result.canceled) {
      setImage(result.assets);
    }
  };

  return (
    <View style={styles.background}>
      <ScrollView>
        <Background>
          <BackButton goBack={navigation.goBack} />

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={pickImage}>
              <Feather
                name="camera"
                size={45}
                color={theme.colors.secondary}
                style={{
                  padding: 10,
                  marginTop: 30,
                  borderWidth: 0.75,
                  borderRadius: 8,
                  borderColor: theme.colors.primary,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                height: theme.dimensions.windowHeight / 5,
              }}
            >
              <FlatList
                horizontal={true}
                // numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  marginVertical: 20,
                  paddingBottom: 50,
                  alignItems: "center",
                  width: theme.dimensions.windowWidth,
                }}
                data={images}
                renderItem={({ item }) => <GalleryImagecomp gip={item} />}
              />
            </View>
          </View>
          <TextInput label="Shop Title" />
          <TextInput label="Company" />
          <TextInput label="Location" />
          <TextInput label="Buget" />
          <TextInput style={{ height: 100 }} label="Description" />
          <DropDownPicker
            style={{ marginBottom: 150 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

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
