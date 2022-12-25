import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Formik, useFormik } from "formik";
import { Feather } from "@expo/vector-icons";
import Background from "../components/Background";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { theme } from "../core/theme";
import GalleryImagecomp from "../components/GalleryImage";
import BackButton from "../components/BackButton";
import InputText from "../Formik/components/InputText";
import ErrorMsg from "../Formik/components/ErrorMsg";
import UploadFormValidationScheme from "../Formik/schemas/UploadFormvalidationSchema";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { postShop } from "../features/user/userActions";
export default function CreateShopScreen({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [category, setCategory] = useState("");

  const [images, setImage] = useState([]);
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === "granted");
    })();
  }, []);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 6,
    });
    console.log("images", result.assets);
    const allIMages = result.assets;

    if (!result.canceled) {
      setImage(result.assets);
    }
  };
  const { data, status } = useSelector((state) => state.category);
  const res = data[0]?.subcategories;
  const dispatch = useDispatch();

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
                category: "",
              }}
              onSubmit={(values) => {
                const formData = new FormData();
                formData.append("type", "job");

                formData.append("title", values.shopTitle);
                if (values.company) {
                  formData.append("company", values.company);
                }
                formData.append("location", {
                  lat: 31.467979194011804,
                  lng: 74.26523240244676,
                  address: "loading...",
                });
                formData.append("budget", values.budget);
                formData.append("description", values.description);
                formData.append("category", values.category);

                if (images.length > 0) {
                  images.forEach((image) => {
                    formData.append("images", image);
                    console.log("OUR UPLOADING IMAGE", image);
                  });
                }

                // createJob(formData);

                // const details = {
                //   title: values.shopTitle,
                //   description: values.description,
                //   category: category.toString(),
                //   company: values.company,
                //   budget: values.budget,
                //   type: "shop",
                //   location: {
                //     lat: 31.467979194011804,
                //     lng: 74.26523240244676,
                //     address: "loading...",
                //   },
                // };
                dispatch(postShop({ data: formData, navigation }));
                alert(JSON.stringify(formData));
              }}
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

                  <Picker
                    enabled={true}
                    mode="category"
                    placeholder="Select City"
                    style={{
                      color: theme.colors.primary,
                      borderColor: theme.colors.primary,
                      borderWidth: 1,
                      width: "80%",
                    }}
                    onValueChange={handleChange("category")}
                    selectedValue={setCategory(values.category)}
                  >
                    {res.map((item) => {
                      return (
                        <Picker.Item
                          label={item.name.toString()}
                          value={item._id}
                          key={item._id.toString()}
                        />
                      );
                    })}
                  </Picker>

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
