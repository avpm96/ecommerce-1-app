import React, { useState, useRef } from "react";
import { bannerData } from "../../../api/data";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");



export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderDot = (index) => {
    return (
      <View
        key={index}
        style={[
          styles.dot,
          { backgroundColor: index === activeIndex ? "#8B6D5C" : "#D9D9D9" },
        ]}
      />
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={bannerData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width - 25}
        contentContainerStyle={styles.flatListContent}
   
      />
      <View style={styles.pagination}>
        {bannerData.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginVertical: 16,
   
  },
  flatListContent: {
    paddingHorizontal: (width - (width - 50)) / 2 - 16, 
  },
 
  slide: {
    width: width - 70,
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',  
    marginHorizontal: 12,

  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: 8,
  },


  description: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#8B6D5C",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
