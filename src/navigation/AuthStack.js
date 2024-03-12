import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import WelcomePage from '../screens/WelcomePage';
import ApiPage from '../screens/ApiPage';
const Stack=createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Signup" component={SignUpPage}/>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Api' component={ApiPage} />
        
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})