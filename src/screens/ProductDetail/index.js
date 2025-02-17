import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import BannerImage from "./BannerImage";
import Description from "./Description";
import ButtonInformation from "./ButtonInformation";

export default function ProductDetail(props) {
  const product = props.route.params.product;

  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Product Details</Text>

        <TouchableOpacity style={styles.heartButton}>
          <Icon name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView nestedScrollEnabled={true}>
        <BannerImage images={product.images} />
        <Description
          type={product.type}
          name={product.name}
          description={product.description}
          rating={product.rating}
        />
      </ScrollView>

      <ButtonInformation price={product.price} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    padding: 4,
  },
  heartButton: {
    padding: 4,
  },
});
