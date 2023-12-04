import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SalaScreen from './screens/Sala';
import SignUpScreen from './screens/Cadastro';
import CameraScreen from './screens/Camera';
import PasswordRecoveryScreen from './screens/RecoverPass';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sala"
        component={SalaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
