import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens';
const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="login">
      {/* on boarding */}

      {/*-------------------auth----------------------*/}
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      {/* register */}
      {/* <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      /> */}
    </Stack.Navigator>
  );
}
