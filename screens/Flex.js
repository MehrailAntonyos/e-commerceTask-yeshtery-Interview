import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';

const Flex = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log("producccccccccct")
    axios.get("https://api-dev.yeshtery.com/v1/yeshtery/products").then((res) => {
      // console.log("imaaaaaaaaaaaaaaaaaaaaaaaaaaaaage")
      // console.log(res.data.products.brand_id);
      setProducts(res.data.products);
    })
  }, [])

  return (
    <View style={styles.con}>
      <FlatList
        key={'_'}
        keyExtractor={item => "_" + item.id}
        renderItem={({ item }) =>
          <View style={styles.card}>

            {/* {console.log("yessssssssss")} */}
            {/* {console.log(item)} */}
            <TouchableOpacity onPress={() => props.navigation.navigate("Product Details", { item })}><View style={{ justifyContent: "flex-start", alignItems: "flex-start", margin: 3 }}>
              <Image source={{ uri: `https://api-dev.yeshtery.com/v1/yeshtery/files/${item.image_url}?height=500` }} style={{ width: 90, height: 90, borderRadius: 8 }} />
            </View>
            </TouchableOpacity>

            <View style={{ margin: 25 }}>
              <Text style={{fontSize:16, fontWeight:'600'}}>{item.name}</Text>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <View style={{display:'flex', flexDirection:'row', margin:10}}>
                  <Image source={require('./images/QrCodeIcon.png')}></Image>
                  <Text style={{marginLeft:10}}>{item.price}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', margin:10}}>
                  <Image source={require('./images/PriceIcon.png')} style={{marginLeft:10}}></Image>
                  <Text style={{marginLeft:10}}>{item.price}</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
              <Text style={styles.price}>{item.release_date}</Text>
              {/* <TouchableOpacity onPress={()=>add(item)}><AntDesign name="hearto" color="red" size={24}/></TouchableOpacity> */}
            </View>

          </View>}
        data={products}
        numColumns={1} />



    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
  con:
  {
    backgroundColor: 'white',
    flex: 1,
    alignItems: "center",
    // marginTop: 10
  },
  card:
  {
    width: 320,
    height: 100,
    backgroundColor: 'white',
    margin: 5,
    marginVertical: 25,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  price:
  {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
  }



})