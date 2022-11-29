import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../core/theme";

const CircularIndicator = () => {
  return (
    <ActivityIndicator
      animating={true}
      size={30}
      style={{
        alignSelf: "center",
        marginTop: theme.dimensions.windowHeight / 2.3,
      }}
      color={"green"}
    />
  );
};

export default CircularIndicator;
