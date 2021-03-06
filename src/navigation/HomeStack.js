import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Contacts from "../screens/Contacts";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          title: "Página Principal",
        }}
      />
      <Stack.Screen
        component={About}
        name="about"
        options={{
          title: "Sobre nosotros",
        }}
      />
      <Stack.Screen
        component={Contacts}
        name="contact"
        options={{
          title: "Contactanos",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
