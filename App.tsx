import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigator } from './Navigation/RootNavigator';
import { UserDataStoreProvider } from './UserDataStore/UserDataStoreContext';
import { UserDataStore, UserDataStoreModel, UserModel } from './UserDataStore/UserDataStore';

export default function App() {
  const [userDataStore] = useState<UserDataStore>(UserDataStoreModel.create({currentUser: UserModel.create({})}));
  return (
    <UserDataStoreProvider value={userDataStore}>
      <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
          <RootNavigator/>
        </SafeAreaView>
      </NavigationContainer>
    </UserDataStoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
