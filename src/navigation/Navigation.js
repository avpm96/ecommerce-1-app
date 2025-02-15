import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritoScreen from '../screens/Favorite';
import Acount from '../screens/Acount';
import HomeScreen from '../screens/Home';
export default function Navigation() {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen
         name="Home"
         component={HomeScreen}
         options={{
           headerTitleAlign:"center",
           title: "Home",
           tabBarLabel: "Home",
           tabBarIcon: ({ color, size }) => (
             <Icon name="home" color={color} size={size} />
           ),
         }}
        
        />
      <Tab.Screen
        name="Favorite"
        component={FavoritoScreen}
        options={{
          headerTitleAlign:"center",
          title: "Favorite",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Acount"
        component={Acount}
        options={{
          headerTitleAlign:"center",
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
  )
}