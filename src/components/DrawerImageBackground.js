import React from 'react'
import { Text, Image, ImageBackground } from 'react-native'
import { theme } from '../core/theme'

const DrawerImageBackground = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000',
      }}
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        backgroundColor: 'rgb(100,0, 30)',
        borderBottomWidth: 2,
        borderColor: 'white',
      }}
      imageStyle={{ opacity: 0.4 }}
    >
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kBdMhPCfsSW9CsgwsqEl_EBC1TNtcPTPBg&usqp=CAU',
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          borderWidth: 2,
          borderColor: 'white',
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Muzammil Rafique
      </Text>
      <Text style={{ color: theme.colors.accent }}>New Customer</Text>
    </ImageBackground>
  )
}

export default DrawerImageBackground
