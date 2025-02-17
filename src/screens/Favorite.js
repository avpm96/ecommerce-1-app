import { StyleSheet, Text , SafeAreaView, View, Image} from 'react-native'
import React from 'react'

export default function FavoritoScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites page under construction</Text>
    <Image 
      source={require('../assets/images/construccion-removebg.png')}
      style={styles.image}
    ></Image>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
