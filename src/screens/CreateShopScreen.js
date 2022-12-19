import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";
import Yup from "yup";

import Background from "../components/Background";
import Button from "../components/Button";
// import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import GalleryImagecomp from "../components/GalleryImage";
import BackButton from "../components/BackButton";
import InputText from "../Formik/components/InputText";
import ErrorMsg from "../Formik/components/ErrorMsg";
import UploadFormValidationScheme from "../Formik/schemas/UploadFormvalidationSchema";

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
  // const { data, status } = useSelector((state) => state.category);

  const onSubmit = () => {
    console.log("object");

    navigation.navigate("RegisterScreen");
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
                  marginTop: theme.dimensions.windowHeight / 8,
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
                  marginTop: 20,
                  paddingBottom: 20,
                  alignItems: "center",
                  width: theme.dimensions.windowWidth,
                }}
                data={images}
                renderItem={({ item }) => <GalleryImagecomp gip={item} />}
              />
            </View>
          </View>
          <View style={styles.loginContainer}>
            <Formik
              validationSchema={UploadFormValidationScheme}
              initialValues={{
                budget: "",
                company: "",
                shopTitle: "",
                description: "",
              }}
              onSubmit={onSubmit}
            >
              {({
                handleChange,
                handleBlur,
                values,
                errors,

                handleSubmit,
              }) => (
                <>
                  <InputText
                    name="shopTitle"
                    placeholder="Shop Title"
                    style={styles.textInputs}
                    onChangeText={handleChange("shopTitle")}
                    onBlur={handleBlur("shopTitle")}
                    value={values.shopTitle}
                    keyboardType="default"
                  />

                  {errors.shopTitle && <ErrorMsg value={errors.shopTitle} />}
                  <InputText
                    name="company"
                    placeholder="Company"
                    style={styles.textInputs}
                    onChangeText={handleChange("company")}
                    onBlur={handleBlur("company")}
                    value={values.company}
                    keyboardType="default"
                  />

                  {errors.company && <ErrorMsg value={errors.company} />}
                  <InputText
                    name="budget"
                    placeholder="Budget"
                    style={styles.textInputs}
                    onChangeText={handleChange("budget")}
                    onBlur={handleBlur("budget")}
                    value={values.budget}
                    keyboardType="numeric"
                  />
                  {errors.budget && <ErrorMsg value={errors.budget} />}

                  <InputText
                    name="description"
                    placeholder="Description"
                    style={styles.textInputs}
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                    keyboardType="default"
                  />

                  {errors.description && (
                    <ErrorMsg value={errors.description} />
                  )}

                  <Button onPress={handleSubmit} mode={"contained"}>
                    Submit
                  </Button>
                </>
              )}
            </Formik>
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
  },
  loginContainer: {
    borderRadius: 18,
    // backgroundColor: theme.colors.error,
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textInputs: {
    paddingLeft: "2%",
    height: 40,
    width: "80%",
    margin: 5,
    backgroundColor: "white",
    borderColor: theme.colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
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
