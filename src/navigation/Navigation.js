import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritoScreen from "../screens/Favorite";
import Acount from "../screens/Acount";
import HomeScreen from "../screens/Home";
export default function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabNavigator,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#666666",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritoScreen}
        options={{
          headerTitleAlign: "center",
          title: "Favorite",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Acount"
        component={Acount}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    flex: 1,
    position: "absolute",
    bottom: 25,
    width: "80%",
    marginLeft: 35,
    elevation: 4,
    height: 60,
    backgroundColor: "#1a1a1a",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderTopWidth: 0,
  },
});
