import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { theme } from "../core/theme";

class GalleryImagecomp extends Component {
  render() {
    const { assetId, uri } = this.props.gip;
    return (
      <View
        style={{
          // margin: "1%",
          alignItems: "center",
          // width: "50%",
          // height: "20%",

          borderColor: theme.colors.primary,
        }}
      >
        <Image style={styles.image} source={{ uri: uri }} />
        {/* <Text style={styles.text}> {assetId} </Text> */}
      </View>
    );
  }
}

export default GalleryImagecomp;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    justifyContent: "center",
    height: theme.dimensions.windowHeight * 0.112,
    width: theme.dimensions.windowWidth * 0.22,
    margin: theme.dimensions.windowWidth * 0.02,
    marginBottom: theme.dimensions.windowWidth * 0.02,
  },
  text: {
    flex: 1,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  price: {
    flex: 1,
    alignSelf: "center",
    fontSize: 15,
    color: theme.colors.secondary,
  },
});
