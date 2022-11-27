import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import HeaderImage from '../components/HeaderImage'
import { Feather } from '@expo/vector-icons'

import { theme } from '../core/theme'
import Paragraph from '../components/Paragraph'

export default function CheckOutScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ScrollView>
        <Background>
          <HeaderImage
            style={styles.HeaderImageStyle}
            uri={
              'https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg'
            }
          />

          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <Feather name="minus" size={20} color={theme.colors.primary} />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg',
                }}
              />
              <Feather name="plus" size={20} color={theme.colors.primary} />
            </View>
            <Text style={styles.heading}>Shawarma</Text>
            <Paragraph>Price : 200</Paragraph>
            <Paragraph>Delievery Charges : 200</Paragraph>
            <Paragraph>Subtotal : 200</Paragraph>

            <View style={{ marginTop: 70 }}>
              <Button
                style={{
                  width: theme.dimensions.windowWidth * 0.8,
                  margin: 10,
                }}
                mode="contained"
              >
                Confirm your order
              </Button>
            </View>
          </View>
        </Background>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  columnView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 12,
    borderColor: theme.colors.primary,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
  },

  image: {
    height: theme.dimensions.windowHeight * 0.13,
    width: theme.dimensions.windowWidth / 3.2,
    borderRadius: 8,
    marginLeft: theme.dimensions.windowWidth * 0.03,
    marginRight: theme.dimensions.windowWidth * 0.03,
    marginVertical: theme.dimensions.windowHeight * -0.05,
  },
  heading: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
    marginTop: theme.dimensions.windowHeight * 0.08,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  HeaderImageStyle: {
    marginBottom: theme.dimensions.windowHeight * 0.01,
    marginVertical: -theme.dimensions.windowHeight * 0.015,
  },
})
