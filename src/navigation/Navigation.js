import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsStack from "./ContactsStack";
import CreditsStack from "./CreditsStack";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { Ionicons } from "@expo/vector-icons";
import RegisterStack from "./RegisterStack";

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "about") {
            iconName = focused ? "build" : "build-outline";
          } else if (route.name === "contact") {
            iconName = focused ? "md-person" : "md-person-outline";
          } else if (route.name === "register") {
            iconName = focused ? "ios-enter" : "ios-enter-outline";
          } else if (route.name === "credits") {
            iconName = focused ? "menu" : "menu-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
          title: "Página Principal",
        }}
      />
      <Tab.Screen
        component={AboutStack}
        name="about"
        options={{
          title: "Sobre nosotros",
        }}
      />
      <Tab.Screen
        component={ContactsStack}
        name="contact"
        options={{
          title: "Contáctanos",
        }}
      />
      <Tab.Screen
        component={RegisterStack}
        name="register"
        options={{
          title: "Registrate",
        }}
      />
      <Tab.Screen
        component={CreditsStack}
        name="credits"
        options={{
          title: "Creditos",
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
