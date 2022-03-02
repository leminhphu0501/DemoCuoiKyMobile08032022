import React, {useState,useEffect} from 'react';
import { Text, View,Image,StyleSheet,ScrollView,Switch, TouchableOpacity } from 'react-native';
import PRODUCTS from '../data/products';
import {Entypo} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
const FilterScreen = (props) => {
    const [isBrandOn,setIsBrandNewOn] = useState(false);
    const [isSaleOn, setIsSaleOn] =useState(false);
    useEffect(() =>
    props.navigation.setOptions({

        headerRight: () => 
        <TouchableOpacity
        onPress={() =>{}}
        >
        <Ionicons name="ios-save" size={40}/>
        </TouchableOpacity>
    }))
    return(
        <View>
                <Text style={styles.text}>Lọc sản phẩm</Text>
                <View style={styles.view}>
                    <Text style={styles.text}>Hàng mới</Text>
                    <Switch style={styles.switch}
                    value={isBrandOn}
                    onValueChange={(newValue) =>setIsBrandNewOn(newValue)}
                    />
                </View>
                <View style={styles.view} >
                    <Text style={styles.text}>Hàng khuyến mãi</Text>
                    <Switch  style={styles.switch} 
                    value={isSaleOn}
                    onValueChange={(newValue)=>setIsSaleOn(newValue)}/>
                </View>
        </View>
    );} 
const styles = StyleSheet.create({
    view:{
        justifyContent:'space-between',
        flexDirection:'row',
        margin:10
    },
    img:{
        width: 375, height: 380, //set width height cho Image 
        alignItems:'center', 
    },
    text:{
        fontSize: 20, 
        fontWeight:'bold', 
        margin:10,
        alignSelf:'center'
    },
    textBig:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'#1E90FF',
    },
    switch:{
        transform:[{scaleX:1.3},{scaleY: 1.3}]
    }
})

export default FilterScreen;
