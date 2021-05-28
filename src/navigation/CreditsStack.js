import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Credits from "../screens/Credits";
import About from "../screens/About";
import Contacts from "../screens/Contacts";

const Stack = createStackNavigator();

const CreditsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Credits}
        name="credits"
        options={{
          title: "Credits",
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
          title: "Contáctanos",
        }}
      />
    </Stack.Navigator>
  );
};

export default CreditsStack;
