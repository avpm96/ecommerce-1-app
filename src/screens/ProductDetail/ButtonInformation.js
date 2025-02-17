import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ButtonInformation({price}) {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Total Price</Text>
        <Text style={styles.priceValue}>${price}</Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Icon name="shopping-cart" size={16} color="#FFF" style={styles.cartIcon} />
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    paddingLeft:5,
    fontSize: 16,
    color: '#666',
  },
  priceValue: {
    paddingLeft:5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B6D5C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cartIcon: {
    marginRight: 4,
  },
});