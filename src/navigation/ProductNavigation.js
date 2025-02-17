import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../screens/ProductDetail";
import Navigation from "./Navigation";
const Stack = createNativeStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Navigation}
        options={{
          title: "Inicio",
         headerShown:false,
             headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: "Detalle del Producto",
          headerBackTitleVisible: false,
            headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
}
