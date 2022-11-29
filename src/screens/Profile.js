import { React, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import { theme } from "../core/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserInfo,
  getData,
  storeData,
} from "../features/user/userActions";
import { STATUSES } from "../features/user/userInfoSlice";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  if (status == STATUSES.LOADING) {
    return <Text style={{ fontSize: 100, color: "black" }}>loading</Text>;
  } else if (status == STATUSES.ERROR) {
    return (
      <Text style={{ fontSize: 100, color: "black" }}>ERROR and token is</Text>
    );
  } else {
    console.log("Data dot name", data.data);
    return (
      <View style={styles.background}>
        <ScrollView>
          <Background>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kBdMhPCfsSW9CsgwsqEl_EBC1TNtcPTPBg&usqp=CAU",
                }}
              />
              <Text style={styles.ProfileHeader}>{data.data?.name}</Text>
              <Paragraph>{data.data?.email}</Paragraph>
              <Paragraph>{data.data?.is18Plus ? "Age: 18+" : ""}</Paragraph>
            </View>
          </Background>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    height: theme.dimensions.windowHeight * 0.7,
    backgroundColor: theme.colors.surface,
    width: theme.dimensions.windowHeight * 0.4,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.dimensions.windowHeight * 0.1,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: theme.colors.primary,
  },

  image: {
    width: theme.dimensions.windowWidth * 0.25,
    height: theme.dimensions.windowHeight * 0.1,
    marginTop: -20,
    borderRadius: 44,
  },
  PListItem: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "justify",
    color: theme.colors.secondary,
    flex: 1,
    flexWrap: "wrap",
    flexDirecton: "row",
  },
  PlistIcon: {
    flexBasis: "20%",
    marginLeft: 20,
    marginTop: -5,
    color: theme.colors.secondary,
  },

  PListItemsView: {
    marginTop: 50,

    flexDirection: "row",
  },
  ProfileHeader: {
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.primary,
    paddingTop: 10,
  },
});
