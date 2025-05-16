import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import LoginScreen from './screens/LoginScreen'; 
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';  
import SignUpScreen from './screens/SignUpScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">  
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}  
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ title: 'Recuperar Senha' }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Criar Conta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
