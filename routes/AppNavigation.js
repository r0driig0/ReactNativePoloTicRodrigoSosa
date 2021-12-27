import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SecondScreen } from "../src/screens/index";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer >
      <Stack.Navigator  initialRouteName='Movies'>
        <Stack.Screen name="Movies" component={HomeScreen} options={{ title: 'MOVIES', headerStyle: { backgroundColor: '#323232'}, headerTintColor: '#fff'}} />
        <Stack.Screen name="Back Home" component={SecondScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigation;


