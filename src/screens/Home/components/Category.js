import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const categories = [
  {
    id: '1',
    name: 'T-Shirt',
    icon: 'tshirt',
  },
  {
    id: '2',
    name: 'Pant',
    icon: 'socks',
  },
  {
    id: '3',
    name: 'Dress',
    icon: 'female',
  },
  {
    id: '4',
    name: 'Jacket',
    icon: 'user-tie',
  },
];

export default function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Category</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryItem}
            onPress={() => {}}
          >
            <View style={styles.iconContainer}>
              <Icon 
                name={category.icon} 
                size={20} 
                color="#8B6D5C"
              />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#8B6D5C',
  },
  categoriesContainer: {
    alignItems: 'center', // Centra el ScrollView verticalmente
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  iconContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#000',
  }
});