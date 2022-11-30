import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const HeaderRight = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Feather
        name="user"
        size={30}
        color="white"
        style={{ marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};

export default HeaderRight;
