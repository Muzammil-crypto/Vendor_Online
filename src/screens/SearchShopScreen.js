import { React, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import SearchbarComp from "../components/SearchBar";
import ChoiceCard from "../components/UserShopChoices";
import { theme } from "../core/theme";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../features/user/userInfoSlice";
import { Feather } from "@expo/vector-icons";
import CircularIndicator from "../components/CircularIndicator";
import { FlatList } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";

export default function SearchShopScreen({ navigation }) {
  //  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.shop);
  // const responseArray = data[0];
  // console.log("Response is ", responseArray);
  if (status == STATUSES.LOADING) {
    return <CircularIndicator />;
  } else if (status == STATUSES.ERROR) {
    return (
      <View style={{ alignItems: "center" }}>
        <Feather
          name="x"
          size={50}
          color="red"
          style={{
            marginTop: theme.dimensions.windowHeight / 2.5,
          }}
        />
        <Text>Error Occured while loading the data</Text>
      </View>
    );
  } else {
    return (
      <View style={{ margin: 10 }}>
        <SearchbarComp />
        <BackButton goBack={navigation.goBack} />

        <View style={{ margin: theme.dimensions.windowHeight * 0.02 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            numColumns={1}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ShopScreen")}
              >
                <ChoiceCard data={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
