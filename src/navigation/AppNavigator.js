import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { theme } from "../core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "../screens";
import ShopScreen from "../screens/ShopScreen";
import ProductDetails from "../screens/ProductDetailScreen";
import SearchShopScreen from "../screens/SearchShopScreen";
import CheckOutScreen from "../screens/CheckOutScreen";
import Profile from "../screens/Profile";
import OrderDetailScreen from "../screens/orderDetailsForm";
import CreateShopScreen from "../screens/CreateShopScreen";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import FeatherDrawerIcon from "../components/FeatherDrawerIcon";
import DrawerImageBackground from "../components/DrawerImageBackground";
import HomeScreen from "../screens/HomeScreen";

export default function AppNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
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
      <Drawer.Screen
        name="StartScreen"
        component={StartScreen}
        options={() => ({
          drawerItemStyle: { display: "none" },

          title: "Vendor Online",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => null,
        })}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "Login",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => null,
        })}
      />
      <Drawer.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "SignUp",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => null,
        })}
      />
      <Drawer.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "Shop Screen",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "CheckOut",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />

      <Drawer.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "OrderDetailScreen",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />

      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },

          title: "Product Details",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
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
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
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
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={({ navigation }) => ({
          drawerIcon: () => <FeatherDrawerIcon name={"settings"} />,

          title: "Reset Password",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          drawerIcon: () => <FeatherDrawerIcon name={"log-out"} />,
          title: "Log out",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Drawer.Navigator>
  );
}
