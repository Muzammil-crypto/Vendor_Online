import React, { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./src/core/themeContext";
import { Theme } from "react-native-paper";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/app/store";
import AppNavigator from "./src/navigation/AppNavigator";
import { theme } from "./src/core/theme";

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListner = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(eventListner);
    };
  });
  return (
    <Provider store={store}>
      <themeContext.Provider
        value={mode === true ? theme.darkTheme : theme.colors}
      >
        <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
          <AppNavigator />
        </NavigationContainer>
      </themeContext.Provider>
    </Provider>
  );
}
