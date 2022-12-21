import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';

const Product = (props) => {
  // console.log(props);
  const [product, setProductDetails] = useState(props.route.params.item);

  // console.log(product.id)
  useEffect(() => {
    axios.get(`https://api-dev.yeshtery.com/v1/yeshtery/product?product_id=${product.id}`).then((res) => {

      // console.log(res.data);
      setProductDetails(res.data);
    })
  }, [])

  let specialCharColorName = /[.\-=/_]/

  let productColors = product.default_variant_features == null ? 'red' : product.default_variant_features.color.toString().toLowerCase()
  // console.log("color", productColors)
  let productColorsDivision = productColors.split(specialCharColorName)
  // console.log(productColorsDivision)

  return (
    <View style={{ backgroundColor: 'white', width: 400, display: 'flex', height: 700 }}>
      <View style={styles.productCardCetails}>
        {/* {console.log(product.id)} */}
        {/* {console.log(product.default_variant_features)} */}
        <Image source={{ uri: `https://api-dev.yeshtery.com/v1/yeshtery/files/${product.image_url}` }} style={{
          width: 200, height: 200, borderRadius: 10, borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          elevation: 3,
          marginLeft: 50
        }} />

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{product.name}</Text>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#1F54CF' }}>({product.price} EGP)</Text>
        </View>

        <Text style={{ color: 'rgba(9, 10, 10, 0.6)', marginTop: 5, marginBottom: 5 }}>{product.description}</Text>
        {/* {console.log("nullor not ", product.default_variant_features)} */}

        <Text style={{ color: '#1F54CF', fontSize: 16, fontWeight: '500', marginTop: 5 }}>Color</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {console.log(Array.isArray(productColors))}
          {productColorsDivision.map((item, index) => {
            return <View key={index} style={{ backgroundColor: `${item}`, borderRadius: 80, width: 20, borderLeftColor: '#1F54CF', borderWidth: 1, margin: 5 }}>
              <Text style={{ color: 'transparent' }}>m{console.log(item)}</Text>
            </View>
          })}
        </View>

        <Text style={{ color: '#1F54CF', fontSize: 16, fontWeight: '500', marginTop: 5 }}>Size</Text>
        <View style={{ backgroundColor: 'transparent', width: 60, borderRadius: 20, padding: 5, marginBottom: 5, borderColor: '#1F54CF', borderWidth: 1 }}>
          <Text style={{ color: 'rgba(9, 10, 10, 0.6)', textAlign: 'center' }}>{product.default_variant_features == null ? "equal null handling error" : product.default_variant_features.size}</Text>
        </View>

        <View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
              <Image source={require('./images/QrCodeIcon.png')} style={{ width: 30, height: 30 }}></Image>
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                <Text style={{ color: '#1F54CF' }}>Scan</Text>
                <Text>& get {product.price} points</Text>
              </View>
            </View>

            <LinearGradient colors={['rgb(0, 232, 219)', 'rgb(92, 76, 219)']}
              useAngle={true}
              angle={45}
              style={{ height: 50, width: 90, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }} onPress={() => props.navigation.navigate("Scan Code", { product })}>Scan</Text>
            </LinearGradient>

          </View>
        </View>



        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <Image source={require('./images/QrCodeIcon.png')} style={{ width: 30, height: 30 }}></Image>
            <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: '#1F54CF' }}>Buy & Submit</Text>
              <Text>The receipt for {product.price} points</Text>
            </View>
          </View>

          <LinearGradient colors={['rgb(0, 232, 219)', 'rgb(92, 76, 219)']}
            useAngle={true}
            angle={45}
            style={{ height: 50, width: 90, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }} >Add To Cart</Text>
          </LinearGradient>

        </View>
      </View>
    </View>

  )
}

export default Product

const styles = StyleSheet.create({
  productCardCetails:
  {
    backgroundColor: 'white', width: 320, display: 'flex', margin: 20, height: 700
  }

})