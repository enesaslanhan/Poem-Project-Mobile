import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import WelcomePage from '../screens/WelcomePage';
import ApiPage from '../screens/ApiPage';
import PoemsPage from '../screens/PoemsPage';
import WritePoem from '../screens/WritePoem';
import BestPoem from '../screens/BestPoem';
const Stack=createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Signup" component={SignUpPage}/>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Api' component={ApiPage} />
        <Stack.Screen name='Poems' component={PoemsPage}/>
        <Stack.Screen name='WritePoem' component={WritePoem}/>
        <Stack.Screen name='BestPoem' component={BestPoem}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})