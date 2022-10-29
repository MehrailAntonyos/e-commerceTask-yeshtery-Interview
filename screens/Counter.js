import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext,useEffect } from 'react';
import { counterContext } from '../config/counterContext';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import {incremeant } from '../Redux/Slices/counterSlice';
const Counter = () => {
    const {count,setCount}=useContext(counterContext);

    const counter=useSelector((state)=>state.counterReducer.count);
    const dispatch=useDispatch();
   
    function add()
    {
       // setCount(count+1)

        dispatch(incremeant(2));
    }
  return (
    <View style={{marginTop:30}}>
      <Text style={{fontSize:20}}>{counter}</Text>
      <Button title='press'onPress={add}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})