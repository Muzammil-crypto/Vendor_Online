import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import SearchbarComp from '../components/SearchBar'
import ChoiceCard from '../components/UserShopChoices'
import { theme } from '../core/theme'

export default function SearchShopScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <SearchbarComp />

        <View style={{ margin: theme.dimensions.windowHeight * 0.02 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ShopScreen')}>
            <ChoiceCard
              reviews={true}
              uri="https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg"
              heading="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus enim at magna congue dapibus. Maecenas porta, velit ac tempus laoreet, quam turpis bibendum metus, nec"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ShopScreen')}>
            <ChoiceCard
              reviews={true}
              uri="https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg"
              heading="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus enim at magna congue dapibus quam turpis bibendum metus, nec"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
