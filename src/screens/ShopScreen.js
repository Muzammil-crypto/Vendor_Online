import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Background from "../components/Background";
import Header from "../components/Header";
import Product from "../components/Producst";
import { theme } from "../core/theme";

const Products = [
  {
    Pname: "Mangoes",
    price: 50,
    productImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg",
  },
  {
    Pname: "Bananas",
    price: 50,
    productImage:
      "https://cdn.shopify.com/s/files/1/0572/1187/9601/products/DayFreshStrawberryFruitYougrt100g.jpg?v=1635249203",
  },
  {
    Pname: "Alu",
    price: 50,
    productImage:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg?w=1155&h=1528",
  },
  {
    Pname: "LadyFinger",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjILQJdc_Ch9p0lq_IuegZ4aeULr8_Jea4Gx0K2HCJlyPhH6dF_brPTR-H3rp7IUNFUo&usqp=CAU",
  },
  {
    Pname: "Strawberies",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s",
  },
  {
    Pname: "Apples",
    price: 50,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5Nbr-4vdoPMN6DDjkNeVowZNgf4RQbrcCjqcBgSb3Q&s",
  },
  {
    Pname: "Grapes",
    price: 50,
    productImage:
      "https://img.freepik.com/free-vector/grape-fruit-cartoon-illustration-flat-cartoon-style_138676-2877.jpg",
  },
];
export default function ShopScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
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
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1l4LQGok_H0_4JZMQfxaNdWqq5WcUePd3b8AB0FcPGgeV3tr7jTgf00G1MYgbAB9E2fw&usqp=CAU",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYESig4h7EpjQHibcNNYHAInb1LuB8NC-m8g&usqp=CAU",
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
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Product product={item} />
            </TouchableOpacity>
          )}
        />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },

  image: {
    width: theme.dimensions.windowWidth,
    height: theme.dimensions.windowHeight * 0.26,
    borderRadius: 18,
    margin: 5,
  },
  ProductImage: {
    width: theme.dimensions.windowWidth * 0.05,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
    flexDirection: "row",
  },
  firstProduct: {
    flexDirection: "row",
  },
  secondProduct: {
    flex: 1,
    width: theme.dimensions.windowWidth * 0.05,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 10,
  },
});
