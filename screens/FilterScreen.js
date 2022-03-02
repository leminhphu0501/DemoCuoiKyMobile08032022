import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,

} from "react-native";
import PRODUCTS from "../data/products";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
//import { useCallback } from "react";
import { useDispatch } from "react-redux";
// const saveFilter = useCallback (()=>{
//   dispatch({type: 'SET_FILTER',filters:filters})
// },[dispatch,isBrandNewOn,isSaleOn]
// )
const FilterScreen = (props) => {
  const [isBrandOn, setIsBrandNewOn] = useState(false);
  const [isSaleOn, setIsSaleOn] = useState(false);
  const dispatch = useDispatch();
  const filters = {
    isBrandOn : isBrandOn,
    isSaleOn : isSaleOn,
  }
  useEffect(() =>
    props.navigation.setOptions({
      headerLeft: () => (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={25} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => dispatch({type:'LOC_SAN_PHAM',filters:filters})}>
          <Ionicons name="ios-save" size={25} color={'gray'} />
        </TouchableOpacity>
      ),
    }), [props.navigation, isBrandOn,isSaleOn]
  )
  return (
    <View style={styles.viewBig}>
      <Text style={styles.text}>Lọc sản phẩm</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Hàng mới</Text>
        <Switch
          style={styles.switch}
          value={isBrandOn}
          onValueChange={(newValue) => setIsBrandNewOn(newValue)}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Hàng khuyến mãi</Text>
        <Switch
          style={styles.switch}
          value={isSaleOn}
          onValueChange={(newValue) => setIsSaleOn(newValue)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
    backgroundColor:'#fff'
  },
  img: {
    width: 375,
    height: 380, //set width height cho Image
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    // fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
  textBig: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E90FF",
  },
  viewBig:{
    backgroundColor:'#fff',
    flex:1
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
});

export default FilterScreen;
