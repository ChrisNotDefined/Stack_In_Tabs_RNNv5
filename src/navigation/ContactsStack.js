import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Contacts from "../screens/Contacts";
import Credits from "../screens/Credits";

const Stack = createStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Contacts}
        name="contact"
        options={{
          title: "Contacts",
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
        component={Credits}
        name="credits"
        options={{
          title: "Credits",
        }}
      />
    </Stack.Navigator>
  );
};

export default ContactsStack;