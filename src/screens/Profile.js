import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import { theme } from "../core/theme";
import { Feather } from "@expo/vector-icons";
export default function Profile({ navigation }) {
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
            <Text style={styles.ProfileHeader}>HamzaCH</Text>
            <Paragraph>@Hamza</Paragraph>
            <View style={styles.PListItemsView}>
              <Feather
                name="airplay"
                size={30}
                color="black"
                style={styles.PlistIcon}
              />
              <Text style={styles.PListItem}>Dashboard</Text>
            </View>
            <View style={styles.PListItemsView}>
              <Feather
                name="dollar-sign"
                size={30}
                color="black"
                style={styles.PlistIcon}
              />
              <Text style={styles.PListItem}>Payment History</Text>
            </View>
            <View style={styles.PListItemsView}>
              <Feather
                name="bar-chart-2"
                size={30}
                color="black"
                style={styles.PlistIcon}
              />
              <Text style={styles.PListItem}>Statistics</Text>
            </View>
            <View style={styles.PListItemsView}>
              <Feather
                name="gift"
                size={30}
                color="black"
                style={styles.PlistIcon}
              />
              <Text style={styles.PListItem}>Reward</Text>
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
