import { React, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import SearchbarComp from "../components/SearchBar";
import ChoiceCard from "../components/UserShopChoices";
import { theme } from "../core/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../features/user/userActions";
import { STATUSES } from "../features/user/userInfoSlice";
import { Feather } from "@expo/vector-icons";
import CircularIndicator from "../components/CircularIndicator";

export default function SearchShopScreen({ navigation }) {
  //  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.shop);

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
      <View>
        <ScrollView>
          <SearchbarComp />

          <View style={{ margin: theme.dimensions.windowHeight * 0.02 }}>
            <TouchableOpacity onPress={() => navigation.navigate("ShopScreen")}>
              <ChoiceCard
                reviews={true}
                uri="https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg"
                heading="Lorem Ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus enim at magna congue dapibus. Maecenas porta, velit ac tempus laoreet, quam turpis bibendum metus, nec"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ShopScreen")}>
              <ChoiceCard
                reviews={true}
                uri="https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg"
                heading="Lorem Ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus enim at magna congue dapibus quam turpis bibendum metus, nec"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
