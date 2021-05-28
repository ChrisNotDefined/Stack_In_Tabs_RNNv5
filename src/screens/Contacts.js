import React from 'react'
import { View, Text, Button } from 'react-native'

const Contacts = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Estas en Contacts</Text>
      <Button
        title="Ir a About"
        onPress={() => {
          navigation.navigate("about");
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
}

export default Contacts
