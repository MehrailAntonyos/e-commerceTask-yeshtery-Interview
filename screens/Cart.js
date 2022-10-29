import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateCart } from '../Redux/Slices/cartSlice';
import { AntDesign } from '@expo/vector-icons'; 

const Cart = () => {
    //const[cart,setCart]=useState([]);
    // read only 
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log("lkjjkd")
    //    // getStorage()
    // },[])
    async function getStorage() {
        var arr = await AsyncStorage.getItem("cart");
        console.log(arr);
        arr = JSON.parse(arr);
        setCart([...arr]);
    }
    function plus(index) {
        dispatch(updateCart(index));
    }
    return (
        <FlatList
            data={cart}
            renderItem={({ item, index }) => <View style={{ alignItems: 'center', margin: 15 }}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Image
                            style={styles.img}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} />
                        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                            <Text>{item.title}</Text>
                            <Text>{item.release_date}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* <AntDesign name="heart" size={24} color="black" /> */}
                                <TouchableOpacity onPress={() => plus(index)}><AntDesign name="heart" size={25} color="red" /></TouchableOpacity>
                                {/* <TouchableOpacity onPress={() => min(index)}><Ionicons name="ios-min-circle-outline" size={25} color="#ff7700" /></TouchableOpacity> */}
                            </View>
                        </View>
                    </View>

                </View></View>} />

    )
}

export default Cart

const styles = StyleSheet.create({
    card:
    {
        width: "100%",
        backgroundColor: "white",
        elevation: 20,
        borderRadius: 30,
        height: 90,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    img:
    {
        width: 80,
        height: 80,
        borderRadius: 80,
        marginTop: 5
    }
})