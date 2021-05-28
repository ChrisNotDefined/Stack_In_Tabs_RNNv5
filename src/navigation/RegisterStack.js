import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import About from "../screens/About";
import Contacts from "../screens/Contacts";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          title: "Registrate",
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
          title: "Contacts",
        }}
      />
    </Stack.Navigator>
  );
};

export default RegisterStack;
