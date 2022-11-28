import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./src/screens";
import ShopScreen from "./src/screens/ShopScreen";
import ProductDetails from "./src/screens/ProductDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CreateShopScreen from "./src/screens/CreateShopScreen";
import Profile from "./src/screens/Profile";
import SearchShopScreen from "./src/screens/SearchShopScreen";
import CheckOutScreen from "./src/screens/CheckOutScreen";
import OrderDetailScreen from "./src/screens/orderDetailsForm";
import HeaderRight from "./src/components/HeaderRight";
import HeaderLeft from "./src/components/HeaderLeft";
import FeatherDrawerIcon from "./src/components/FeatherDrawerIcon";
import DrawerImageBackground from "./src/components/DrawerImageBackground";
import { Provider } from "react-redux";
import store from "./src/app/store";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
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
              headerRight: () => <HeaderRight />,
              headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
