import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './screens/Flex';
import Login from './screens/Login';
import Todo from './screens/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Product from './screens/Product';
import { counterContext } from './config/counterContext';
import { useState } from 'react';
  import { store } from './Redux/Store';
import {Provider} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';


export default function App() {

  const [count,setCount]=useState(0);
  console.log(store.getState());

  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>
  <counterContext.Provider value={{count,setCount}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' 
      screenOptions={{ 
      }}>
        <Stack.Screen name='Home' component={Tab} options={{headerBackVisible:false,
        headerShown:false
        }}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Product' component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
    </counterContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#fff',
  },
});
