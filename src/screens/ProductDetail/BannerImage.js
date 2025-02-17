import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const BannerImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <View style={styles.container}>
      <View style={styles.mainImageContainer}>
        <Image
          source={selectedImage}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailContainer}
        contentContainerStyle={styles.thumbnailContent}
      >
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedImage(img)}
            style={[
              styles.thumbnailButton,
              selectedImage === img && styles.selectedThumbnail,
            ]}
          >
            <Image
              source={img}
              style={styles.thumbnailImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#fff",
  },
  mainImageContainer: {
    width: width,
    height: width,
    
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  thumbnailContainer: {
    position: "absolute",
    bottom: 20,
    left: 50,
    right: 0,
    paddingHorizontal: 15,
  },
  thumbnailContent: {
    alignItems: "center",
  },
  thumbnailButton: {
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 2,
    backgroundColor: "#fff",
  },
  selectedThumbnail: {
    borderColor: "#8B6D5C",
    borderWidth: 2,
  },
  thumbnailImage: {
    width: 65,
    height: 65,
    borderRadius: 6,
  },
});

export default BannerImage;
