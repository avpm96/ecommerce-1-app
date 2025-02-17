import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import ProductNavigation from "./src/navigation/ProductNavigation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="default"
      />
      <NavigationContainer>
        <ProductNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});