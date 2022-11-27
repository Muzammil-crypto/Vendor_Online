import { DefaultTheme } from 'react-native-paper'
import { Dimensions } from 'react-native'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#C41C3E',

    secondary: '#414757',
    error: '#f13a59',
  },
  dimensions: {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
  },
}
