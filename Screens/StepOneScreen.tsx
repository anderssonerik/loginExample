import { observer } from "mobx-react-lite";
import React, { FunctionComponent, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useUserDataStore } from "../UserDataStore/UserDataStoreContext";
import validator from "validator";
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

export const StepOneScreen: FunctionComponent<ScreenProps> = observer(({navigation}) => {
  const {currentUser} = useUserDataStore();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [tempEmail, setTempEmail] = useState(currentUser.emailAddress);

  function onEmailFieldChanged(text: string) {
    setTempEmail(text);
    if (validator.isEmail(text)) {
      setIsValidEmail(true);
      currentUser.setEmailAddress(text)
    } else {
      setIsValidEmail(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>First Name</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.firstName}
        onChangeText={currentUser.setFirstName}
        placeholder={"John"}
      />
      <Text>Last Name</Text>
      <TextInput
        style={styles.textInput}
        value={currentUser.lastName}
        onChangeText={currentUser.setLastName}
        placeholder={"Appleseed"}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        value={tempEmail}
        onChangeText={onEmailFieldChanged}
        placeholder={"johnAppleseed@gmail.com"}
      />
      {!isValidEmail && <Text>Please Enter A Valid Email Address</Text>}
      <Button
        title="Next"
        onPress={() => navigation.navigate('Two')}
        disabled={
          currentUser.firstName == ""
          && currentUser.lastName == ""
          && currentUser.emailAddress == ""
        }
      />
    </View>
  )
});