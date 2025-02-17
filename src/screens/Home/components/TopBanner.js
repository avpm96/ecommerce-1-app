import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TopBanner ()  {
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
        <Text style={styles.text}>Locations</Text>
        <TouchableOpacity style={styles.bellContainer}>
          <Icon name="bell" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.locationContainer}>
        <Icon name="map-marker-alt" size={20} color="#8B6D5C" />
        <Text style={styles.locationText}>New York, USA</Text>
        <Icon name="chevron-down" size={14} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  bellContainer: {
    padding: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    marginBottom: 16,
    top:5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 8,
  },
  
 
});


