import React from 'react'

import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { theme } from '../core/theme'

const FeatherDrawerIcon = ({ name }) => {
  return (
    <View>
      <Feather
        name={name}
        size={20}
        color={theme.colors.primary}
        style={{ marginRight: 10 }}
      />
    </View>
  )
}

export default FeatherDrawerIcon
