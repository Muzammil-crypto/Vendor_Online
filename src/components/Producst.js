import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

class Product extends Component {
  render() {
    const { Pname, price, productImage } = this.props.product
    return (
      <View
        style={{
          margin: '1%',
          borderWidth: 0.75,
          alignItems: 'center',
          width: '100%',
          borderRadius: 8,

          borderColor: theme.colors.primary,
        }}
      >
        <Image style={styles.image} source={{ uri: productImage }} />
        <Text style={styles.text}> {Pname} </Text>
        <Text style={styles.price}>Price: {price} $ </Text>
      </View>
    )
  }
}

export default Product

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    justifyContent: 'center',
    height: theme.dimensions.windowHeight * 0.2,
    width: theme.dimensions.windowWidth * 0.41,
    marginRight: theme.dimensions.windowWidth * 0.02,
    marginLeft: theme.dimensions.windowWidth * 0.02,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  price: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 15,
    color: theme.colors.secondary,
  },
})
