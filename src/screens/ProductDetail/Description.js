import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Description({ type, description, name, rating }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (description.length <= 20) {
      return <Text style={styles.description}>{description}</Text>;
    }

    if (!showFullDescription) {
      return (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {description.substring(0, 20)}...
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>Read more</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.expandedDescriptionContainer}>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.readMore}>Read less</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.categoryTitle}>
          {type === "female" ? "Female's Style" : "Male's Style"}
        </Text>
        <View style={styles.ratingContainer}>
          <Icon
            name="star"
            size={16}
            color="#FFD700"
            solid
            style={styles.starIcon}
          />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>

      <Text style={styles.title}>{name}</Text>
      <Text style={styles.sectionTitle}>Product Details</Text>
      {renderDescription()}
      
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionTitle}>Select Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeOption,
                selectedSize === size && styles.selectedSize,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.selectionTitle}>Select Color : Brown</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingHorizontal: 20,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingTop: 15,
  },
  categoryTitle: {
    fontSize: 14,
    color: "#666",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  starIcon: {
    marginRight: 4,
  },
  rating: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  descriptionContainer: {
    flexDirection: 'row', // Cambiado para alinear elementos horizontalmente
    alignItems: 'center', // Centrar verticalmente
    gap: 2, 
   
  },
  expandedDescriptionContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  readMore: {
    color: '#8B6D5C',
    fontWeight: 'bold',
  },
  selectionContainer: {
    marginTop: 20,
  },
  selectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  sizeContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  sizeOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    fontSize: 14,
  },
  selectedSize: {
    backgroundColor: "#8B6D5C",
    borderColor: "#8B6D5C",
  },
  sizeText: {
    fontSize: 14,
    color: "#333",
  },
  selectedSizeText: {
    color: "#FFF",
  },
});