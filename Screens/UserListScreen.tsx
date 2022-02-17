import { observer } from "mobx-react-lite";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { getUserListFromDB } from "../API/json-db";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

function createFlatListItem(user) {
  return (
    <View key={user.id} style={{backgroundColor: 'grey', marginBottom: 10}}>
      <Text>First Name: {user.firstName}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>Email: {user.email}</Text>
      <Text>City: {user.city}</Text>
      <Text>Country: {user.country}</Text>
      <Text>Date of Birth: {user.dateOfBirth}</Text>
      <Text>Phone Number: {user.mobile}</Text>
    </View>
  )
}

export const UserListScreen: FunctionComponent = observer(() => {
  const [userList, setUserList] = useState([]);

  async function updateUserList() {
    const userListFromDB = await getUserListFromDB();
    setUserList(userListFromDB);
  }

  useEffect(() => {
    if(userList.length == 0) {
      updateUserList()

    }
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={({item}) => createFlatListItem(item)}
      />
    </View>
  )
});