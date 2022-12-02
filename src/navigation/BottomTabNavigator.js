import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";
import { theme } from "../core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  CreateShopScreen,
  CheckOutScreen,
  HomeScreen,
  OrderDetailScreen,
  ProductDetails,
  Profile,
  SearchShopScreen,
  ShopScreen,
} from "../screens";

import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import FeatherDrawerIcon from "../components/FeatherDrawerIcon";
import DrawerImageBackground from "../components/DrawerImageBackground";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerItems from "./DrawerItems";
export default function BottomTabsNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="StartScreen"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
              <DrawerImageBackground />
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          </View>
        );
      }}
    >
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
          drawerIcon: () => <FeatherDrawerIcon name={"home"} />,
          title: "Home",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          drawerIcon: () => <FeatherDrawerIcon name={"user"} />,
          title: "Profile",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />

      <Tab.Screen
        name="CreateShopScreen"
        component={CreateShopScreen}
        options={({ navigation }) => ({
          drawerIcon: () => <FeatherDrawerIcon name={"upload"} />,
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
        name="SearchShopScreen"
        component={SearchShopScreen}
        options={({ navigation }) => ({
          drawerIcon: () => <FeatherDrawerIcon name={"search"} />,
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
    </Tab.Navigator>
  );
}
