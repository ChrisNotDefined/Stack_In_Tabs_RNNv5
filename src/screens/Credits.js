import React from "react";
import { View, Text, Button } from "react-native";

const Credits = (props) => {
  const { navigation } = props;
  
  return (
    <View>
      <Text>Estas en Credits</Text>
      <Button
        title="Ir a About"
        onPress={() => {
          navigation.navigate("about");
        }}
      />
      <Button
        title="Ir a Contact"
        onPress={() => {
          navigation.navigate("contact");
        }}
      />
      <Text>Created by: </Text>
      <Text>Christpher ALvarez Pichardo</Text>
      <Text>Andrea Anahi Ordaz Nova</Text>
      <Text>Javier Madrazo Ortiz</Text>
    </View>
  );
};

export default Credits;