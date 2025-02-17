import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TopBanner from "./components/TopBanner";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Category from "./components/Category";
import FlashSale from "./components/FlashSale";
import ProductList from "./components/ProductList";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <TopBanner />
        <Search />
        <Banner />
        <Category/>
        <FlashSale/>
        <ProductList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});