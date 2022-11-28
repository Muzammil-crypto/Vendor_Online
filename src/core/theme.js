import { DefaultTheme } from "react-native-paper";
import { Dimensions } from "react-native";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#000000",
    primary: "#009243",

    secondary: "#414757",
    error: "#009243",
  },
  dimensions: {
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
  },
};
