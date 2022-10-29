import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addCart } from '../Redux/Slices/cartSlice';
import { AntDesign } from '@expo/vector-icons'; 

const Flex = (props) => {
  const dispatch=useDispatch();
  const [products,setProducts]=useState([]);
  useEffect(()=>
  {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=12158e8ce1683d5ba431ba576c81087b").then((res)=>
    {
      console.log(res.data);
      setProducts(res.data.results);
    })
  },[])
 async function add(item)
  {
    // var arr=await AsyncStorage.getItem("cart");
    // if(!arr)
    // {
    //   var arr=[];
    //   arr.push(item);
    //   await AsyncStorage.setItem("cart",JSON.stringify(arr));
    // }
    // else
    // {
    //   console.log("ddd")
    //   arr=JSON.parse(arr);
    //   arr.push(item);
    //   await AsyncStorage.setItem("cart",JSON.stringify(arr));
    //   }
      
    dispatch(addCart({...item,qunatity:1}));
    }
  return (
    <View style={styles.con}>

      <FlatList
      numColumns={2}
      data={products}
      keyExtractor={(item,index)=>index}
      renderItem={({item})=><View style={styles.card}>
        {console.log("yessssssssss")}
        {console.log(item)}
        <TouchableOpacity onPress={()=>props.navigation.navigate("Product",{item})}><View style={{justifyContent:"center",alignItems:"center",top:-50}}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}} style={{width:90,height:90,borderRadius:90}}/>
        </View>
        </TouchableOpacity>
        <Text>{item.title}</Text>
        <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <Text style={styles.price}>{item.release_date}</Text>
        <TouchableOpacity onPress={()=>add(item)}><AntDesign name="hearto" color="red" size={24}/></TouchableOpacity>
        </View>

      </View>}
      />
    
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
    con:
    {
        backgroundColor:'grey',
       flex:1,
       alignItems:"center",
       marginTop:10
    },
    card:
    { 
      width:175,
      height:200,
      backgroundColor:'white',
      margin:5,
      marginVertical:25,
      borderRadius:30
    },
    price:
    {
      fontSize:20,
      fontWeight:"bold",
      color:"orange",
    }



})