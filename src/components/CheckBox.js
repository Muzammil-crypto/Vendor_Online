import { React, useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";
const CheckBox = ({ checkBoxStatus, valChangeStatus, caption }) => {
  const [isChecked, setChecked] = useState(false);
  let isPressed = false;
  return (
    <View style={styles.checkboxView}>
      <TouchableOpacity onPress={(isPressed = !isPressed)}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={isPressed ? setChecked : isChecked}
        />
      </TouchableOpacity>
      <Text>{caption}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    textAlign: "left",
    height: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  checkboxView: {
    flex: 1,
    alignContent: "flex-start",
    marginLeft: theme.dimensions.windowHeight * 0.08,
    flexDirection: "row",
    width: theme.dimensions.windowWidth,
    marginTop: 10,
  },
});
