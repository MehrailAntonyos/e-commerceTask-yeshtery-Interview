import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = (props) => {
  console.log(props);
  const [product, setProductDetails] = useState(props.route.params.item);

  //  const [productDetails,setProductDetails]=useState(props.route.params.item);
  console.log("get idddddddddddddd")
  console.log(product.id)
  useEffect(() => {
    console.log("producccccccccct")
    axios.get(`https://api-dev.yeshtery.com/v1/yeshtery/product?product_id=${product.id}`).then((res) => {
      console.log("finaaaaaaaaaaaaaaaaaaaaaaaaaaallllllllll")
      console.log(res.data);
      setProductDetails(res.data);
    })
  }, [])
  let specialCharColorName = /[.\-=/_]/
  // let productColors = product.default_variant_features == null ? 'red' : `${specialCharColorName.test(product.default_variant_features.color.toString().toLowerCase()) ? typeof( product.default_variant_features.color.toString().toLowerCase().split(/[.\-=/_]/) ): typeof( product.default_variant_features.color.toString().toLowerCase())}`
  let productColors = product.default_variant_features == null ? 'red' : product.default_variant_features.color.toString().toLowerCase()
  console.log("colooooorrrrrr", productColors)
  let productColorsDivision = productColors.split(specialCharColorName)
  console.log(productColorsDivision)

  return (
    <View style={{backgroundColor:'white', width:400, display:'flex',height:700}}>
      <View style={styles.productCardCetails}>
      {console.log(product.id)}
      {console.log("detailsssssssssssssssssssssss")}
      {console.log(product.default_variant_features)}
      <Image source={{ uri: `https://api-dev.yeshtery.com/v1/yeshtery/files/${product.image_url}` }} style={{ width: 90, height: 90, borderRadius: 10 }} />

      <Text>{product.name}</Text>
      <Text>{product.price}</Text>

      {console.log("nulllllll or noooot ", product.default_variant_features)}

      {/* <Text>{product.default_variant_features == null ? "equal null handling error" : product.default_variant_features.color}</Text> */}


      <View>
        {console.log(Array.isArray(productColors))}
        {productColorsDivision.map((item, index) => {
          return <View key={index} style={{ backgroundColor: `${item}` }}><Text>{item}{console.log(item)}</Text></View>
        })}
      </View>

      <Text>{product.default_variant_features == null ? "equal null handling error" : product.default_variant_features.size}</Text>

        {/* <View style={{ justifyContent: "center", alignItems: "center", top: -50 }}> */}
        <Button style={{ width: 90, height: 90, color: 'red' }}  title="Scan" onPress={() => props.navigation.navigate("Scan Code", { product })}></Button>
      {/* </View> */}
</View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  productCardCetails:
  {
    backgroundColor:'white', width:320, display:'flex', margin:20, height:700
  }

})