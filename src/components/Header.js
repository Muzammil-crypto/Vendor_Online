import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: theme.dimensions.windowHeight * 0.01,
  },
})
