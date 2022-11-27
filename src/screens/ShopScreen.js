import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Background from '../components/Background'
import Header from '../components/Header'
import Product from '../components/Producst'
import { theme } from '../core/theme'

const Products = [
  {
    Pname: 'Strawberry',
    price: 50,
    productImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg',
  },
  {
    Pname: 'lela',
    price: 50,
    productImage:
      'https://cdn.shopify.com/s/files/1/0572/1187/9601/products/DayFreshStrawberryFruitYougrt100g.jpg?v=1635249203',
  },
  {
    Pname: 'Alu',
    price: 50,
    productImage:
      'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg?w=1155&h=1528',
  },
  {
    Pname: 'Alu',
    price: 50,
    productImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjILQJdc_Ch9p0lq_IuegZ4aeULr8_Jea4Gx0K2HCJlyPhH6dF_brPTR-H3rp7IUNFUo&usqp=CAU',
  },
  {
    Pname: 'Alu',
    price: 50,
    productImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s',
  },
  {
    Pname: 'Alu',
    price: 50,
    productImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s',
  },
  {
    Pname: 'Alu',
    price: 50,
    productImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s',
  },
]

export default function ShopScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View style={styles.background}>
      <Background>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: theme.dimensions.windowHeight * 0.5 }}
        >
          <Image
            style={styles.image}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/18/04/73/360_F_318047308_FtdcpP2NHepZV68ZYxFH2JmtLW8a23N8.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s',
            }}
          />
        </ScrollView>
        <Header>Products</Header>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ height: windowHeight, width: windowWidth }}
          numColumns={2}
          data={Products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ margin: 3 }}
              onPress={() => navigation.navigate('ProductDetails')}
            >
              <Product product={item} />
            </TouchableOpacity>
          )}
        />
      </Background>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },

  image: {
    width: theme.dimensions.windowWidth * 0.8,
    height: theme.dimensions.windowHeight * 0.26,
    borderRadius: 18,
    marginLeft: 5,
    marginRight: 10,
  },
  ProductImage: {
    width: theme.dimensions.windowWidth * 0.05,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
    flexDirection: 'row',
  },
  firstProduct: {
    flexDirection: 'row',
  },
  secondProduct: {
    flex: 1,
    width: theme.dimensions.windowWidth * 0.05,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
  },
})
