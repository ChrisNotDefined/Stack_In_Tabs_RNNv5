import React from "react";
import { View, Text, Button } from "react-native";

const Home = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Estas en Home</Text>
      <Button
        title="Ir a Contact"
        onPress={() => {
          navigation.navigate("contact");
        }}
      />
      <Button
        title="Ir a About"
        onPress={() => {
          navigation.navigate("about");
        }}
      />
    </View>
  );
};

export default Home;
