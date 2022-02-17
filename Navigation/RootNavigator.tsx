import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartScreen } from "../Screens/StartScreen";
import { StepOneScreen } from '../Screens/StepOneScreen';
import { StepTwoScreen } from '../Screens/StepTwoScreen';
import { StepThreeScreen } from '../Screens/StepThreeScreen';
import { UserListScreen } from '../Screens/UserListScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Start'
    >
      <Stack.Screen name='Start' component={StartScreen}/>
      <Stack.Screen name='One' component={StepOneScreen}/>
      <Stack.Screen name='Two' component={StepTwoScreen}/>
      <Stack.Screen name='Three' component={StepThreeScreen}/>
      <Stack.Screen name='User List' component={UserListScreen}/>
    </Stack.Navigator>
  )
}