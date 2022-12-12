import React from "react";

// import { View } from "react-native";
import { theme } from "../core/theme";
import {
  CreateShopScreen,
  HomeScreen,
  Profile,
  SearchShopScreen,
} from "../screens";

import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import FeatherDrawerIcon from "../components/FeatherDrawerIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerItems from "./DrawerItems";
export default function BottomTabsNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator backBehavior="history" initialRouteName="StartScreen">
      <Tab.Screen
        name="Drawer"
        component={DrawerItems}
        options={{
          headerShown: false,

          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: () => <FeatherDrawerIcon name={"home"} />,
          title: "Home",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          // tabBarStyle: { display: "none" },

          //   tabBarStyle: {
          //     backfaceVisibility: "hidden",
          //   },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="SearchShopScreen"
        component={SearchShopScreen}
        options={({ navigation }) => ({
          tabBarIcon: () => <FeatherDrawerIcon name={"search"} />,
          title: "Search a Shop",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          // headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="CreateShopScreen"
        component={CreateShopScreen}
        options={({ navigation }) => ({
          tabBarIcon: () => <FeatherDrawerIcon name={"upload"} />,
          title: "Upload a Shop",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          // headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          tabBarIcon: () => <FeatherDrawerIcon name={"user"} />,
          title: "Profile",
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Tab.Navigator>
  );
}
