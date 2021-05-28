import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "../screens/Contacts";
import HomeStack from "./HomeStack";

// const Stack = createStackNavigator();

// export const Navigation = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         component={Home} name="home"
//         options={{
//           title: "Página Principal",
//         }}
//       />
//       <Stack.Screen
//         component={About} name="about"
//         options={{
//           title: "Sobre nosotros",
//         }}
//       />
//       <Stack.Screen
//         component={Contacts} name="contact"
//         options={{
//           title: "Contáctanos",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeStack}
        name="homeStack"
        options={{ title: "Home Stack" }}
      />
      <Tab.Screen
        component={Home}
        name="home"
        options={{
          title: "Página Principal",
        }}
      />
      <Tab.Screen
        component={About}
        name="about"
        options={{
          title: "Sobre nosotros",
        }}
      />
      <Tab.Screen
        component={Contacts}
        name="contact"
        options={{
          title: "Contáctanos",
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
