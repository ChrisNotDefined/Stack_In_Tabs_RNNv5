import React from "react";
import { View, Text, Button } from "react-native";

const About = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Estas en About</Text>
      <Button
        title="Ir a Contact"
        onPress={() => {
          navigation.navigate("contact");
        }}
      />
      <Button
        title="Ir a Credits"
        onPress={() => {
          navigation.navigate("credits");
        }}
      />
    </View>
  );
};

export default About;
