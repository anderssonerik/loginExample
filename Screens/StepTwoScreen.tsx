import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useUserDataStore } from "../UserDataStore/UserDataStoreContext";
import { ScreenProps } from "./types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1
  }
});

export const StepTwoScreen: FunctionComponent<ScreenProps> = observer(({navigation}) => {
  const {currentUser} = useUserDataStore();

  return (
    <View style={styles.container}>
      <Text>City</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.city}
        onChangeText={currentUser.setCity}
        placeholder={"Seattle"}
      />
      <Text>Country</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.country}
        onChangeText={currentUser.setCountry}
        placeholder={"USA"}
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('Three')}
        disabled={currentUser.city == "" && currentUser.country == ""}
      />
    </View>
  )
})