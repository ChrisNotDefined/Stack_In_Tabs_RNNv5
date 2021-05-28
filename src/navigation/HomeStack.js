import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

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
    </Stack.Navigator>
  );
};

export default HomeStack;
