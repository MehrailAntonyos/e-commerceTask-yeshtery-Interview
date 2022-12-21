import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from "react-native-modal";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

const ScanCode = (props) => {
  //   console.log("props", props)
  const [item, setCode] = useState(props.route.params.product);

  console.log("scannnnn")
  console.log("code", item)

  const { width } = Dimensions.get('screen');
  const leftTop = {
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: '#1F54CF',
    borderRadius: 5
  };
  const leftBottom = {
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#1F54CF',
    borderRadius: 5
  };
  const rightTop = {
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: '#1F54CF',
    borderRadius: 5
  };
  const rightBottom = {
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#1F54CF',
    borderRadius: 5
  };

  const [modal, setModal] = useState(false)

  return (

    <View>
      {/* <Text>Scan here</Text> */}
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



      <View>

        <Modal isVisible={modal}>
          <TouchableOpacity onPress={() => setModal(false)}>



            <View style={styles.starfive} />
            <View >
              <View style={styles.starfiveBefore} />
              <View style={styles.starfiveAfter} />
            </View>

            <View style={styles.starfive} />
            <View >
              <View style={[styles.starfiveBefore, { borderBottomColor: '#0255CC', left: 200, top: 230, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
              <View style={[styles.starfiveAfter, { borderBottomColor: '#0255CC', left: 200, top: 230, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
            </View>

            <View style={styles.starfive} />
            <View >
              <View style={[styles.starfiveBefore, { borderBottomColor: 'rgba(90, 94, 106, 1)', left: 100, top: 220, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
              <View style={[styles.starfiveAfter, { borderBottomColor: 'rgba(90, 94, 106, 1)', left: 100, top: 220, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
            </View>

            <View style={styles.starfive} />
            <View >
              <View style={[styles.starfiveBefore, { left: 50, top: 150, borderRightWidth: 10, borderBottomWidth: 5, borderLeftWidth: 10 }]} />
              <View style={[styles.starfiveAfter, { left: 50, top: 150, borderRightWidth: 10, borderBottomWidth: 5, borderLeftWidth: 10 }]} />
            </View>

            <View style={styles.starfive} />
            <View >
              <View style={[styles.starfiveBefore, { borderBottomColor: 'rgba(90, 94, 106, 1)', left: 250, top: 50, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
              <View style={[styles.starfiveAfter, { borderBottomColor: 'rgba(90, 94, 106, 1)', left: 250, top: 50, borderRightWidth: 15, borderBottomWidth: 5, borderLeftWidth: 15 }]} />
            </View>
            {/* <View style={{ backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 10 }}>
              <Text>{item.price}</Text>
            </View> */}

            <LinearGradient colors={['rgb(0, 232, 219)', 'rgb(92, 76, 219)']}
              useAngle={true}
              angle={45}
              style={{ height: 170, width: 170, borderRadius: 180, marginLeft: 80, borderWidth: 10, borderColor: '#303030' }}>
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 35, fontSize: 40, fontWeight: '600' }} >{item.price}</Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Points</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Modal>

      </View>

        <MaterialIcons name="flash-on" onPress={() => setModal(true)} size={120} color="rgba(255, 255, 255, 1)" style={{top:450, left:120}} />

    </View >

  )
}

export default ScanCode

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
  },
  starfive: {
    width: 20,
    height: 20,
  },
  starfiveTop: {
    position: "absolute",
    top: -45,
    left: 37,
  },
  starfiveBefore: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 30,
    top: 100,
    borderStyle: "solid",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderBottomWidth: 5,
    borderBottomColor: "white",
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    transform: [{ rotate: "35deg" }],
  },
  starfiveAfter: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 100,
    left: 30,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderBottomWidth: 5,
    borderBottomColor: "white",
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    transform: [{ rotate: "-35deg" }],
  },
});