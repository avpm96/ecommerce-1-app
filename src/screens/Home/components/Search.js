import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={16}
            color="#8c8c8c"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8c8c8c"
          />
        </View>
        <View style={styles.filterButton}>
          <Icon
            name="sliders-h"
            size={14}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    borderWidth: 1,
    borderColor: '#666666',
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  filterButton: {
    backgroundColor: '#8B6D5C',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
  },
});