import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from "react-native-modal";

const ScanCode = (props) => {
  //   console.log("props", props)
  const [item, setCode] = useState(props.route.params.product);

  console.log("scannnnn")
  console.log("code", item)

  const { width } = Dimensions.get('screen');
  const leftTop = {
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white'
  };
  const leftBottom = {
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'white'
  };
  const rightTop = {
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white'
  };
  const rightBottom = {
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'white'
  };

  const [modal, setModal] = useState(false)

  return (

    <View>
      <Text>Scan here</Text>
      <View style={{ flex: 1 }}>

        <Image source={require('./images/QRcode.jpg')} style={{ width: 150, height: 150, marginTop: 225, marginLeft: 105 }}></Image>
        <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: width / 2, height: width / 2, backgroundColor: 'transparent', marginTop: 600 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftTop }}></View>
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightTop }}></View>
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftBottom }}></View>
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightBottom }}></View>

            </View>
          </View>

        </View>

      </View>

      <Button onPress={() => setModal(true)} title='scan'></Button>

      <View>

        <Modal isVisible={modal}>
          <TouchableOpacity onPress={() => setModal(false) }>
            <View style={{ backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 10 }}>
              <Text>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </Modal>

      </View>

    </View>

  )
}

export default ScanCode

const styles = StyleSheet.create({})