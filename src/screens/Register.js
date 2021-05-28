import React from "react";
import { View, Text, Button } from "react-native";

const Register = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Register Page</Text>
      <Button
        title="Ir a Contacts"
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

export default Register;
