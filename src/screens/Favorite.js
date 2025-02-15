import { StyleSheet, Text , SafeAreaView, View} from 'react-native'
import React from 'react'

export default function FavoritoScreen() {
  return (
    <View    style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
