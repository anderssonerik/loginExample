import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useUserDataStore } from "../UserDataStore/UserDataStoreContext";
import { ScreenProps } from "./types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const StartScreen: FunctionComponent<ScreenProps> = observer(({navigation}) => {

  const userDataStore = useUserDataStore();

  const newUserOnPress = () => {
    userDataStore.createNewUser();
    navigation.navigate('One');
  }

  return (
    <View style={styles.container}>
      <Button
        title="Create New User"
        onPress={() => newUserOnPress()}/>
    </View>
  )
});