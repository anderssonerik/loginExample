import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { submitUserToDB } from "../API/json-db";
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

export const StepThreeScreen: FunctionComponent<ScreenProps> = observer(({navigation}) => {
  const {currentUser} = useUserDataStore();

  return (
    <View style={styles.container}>
      <Text>Date of Birth</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.dob}
        onChangeText={currentUser.setDateOfBirth}
        placeholder={"01/01/1990"}
      />
      <Text>Mobile Number</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.phoneNumber}
        onChangeText={currentUser.setPhoneNumber}
        placeholder={"800-555-1234"}
      />
      <Button
        title="Submit"
        onPress={() => submitUserToDB(currentUser,
          (resp) => {navigation.navigate('User List')},
          (error) => {navigation.navigate('User List')}
        )}
        disabled={currentUser.dob == "" && currentUser.phoneNumber == ""}
      />
    </View>
  )
})