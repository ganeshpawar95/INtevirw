import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen, HomeScreen, StartScreen} from '../screens';
const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="start">
      {/* on boarding */}

      {/*-------------------auth----------------------*/}
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      {/* register */}
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />

      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
