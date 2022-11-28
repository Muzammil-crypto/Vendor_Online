import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <Feather
        name="arrow-left"
        size={30}
        color="white"
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
