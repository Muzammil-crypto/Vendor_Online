import React, { useState } from "react";
import { Text, Image, ImageBackground, View } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { Switch } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../core/theme";
import Paragraph from "./Paragraph";

const DrawerImageBackground = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.userInfo);
  const [mode, setMode] = useState(false);
  return (
    <ImageBackground
    // source={{
    //   uri: "https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000",
    // }}
    // style={{
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   padding: 20,
    //   marginBottom: 20,
    //   backgroundColor: "rgb(100,0, 30)",
    //   borderBottomWidth: 2,
    //   borderColor: "white",
    // }}
    // imageStyle={{ opacity: 0.4 }}
    >
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kBdMhPCfsSW9CsgwsqEl_EBC1TNtcPTPBg&usqp=CAU",
        }}
        style={{
          width: 70,
          height: 70,
          alignSelf: "center",
          borderRadius: 35,
          borderWidth: 2,
          borderColor: "white",
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: theme.colors.primary,
          }}
        >
          {data.data?.name}
        </Text>
        <Text style={{ color: theme.colors.secondary }}>
          {data.data?.email}
        </Text>
        <Paragraph>{data.data?.is18Plus ? "Age: 18+" : ""}</Paragraph>
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit("changeTheme", value);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default DrawerImageBackground;
