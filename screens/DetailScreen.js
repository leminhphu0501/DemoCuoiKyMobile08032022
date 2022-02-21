import React from 'react';
import { Text, View,Image,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import PRODUCTS from '../data/products';
import {Entypo} from '@expo/vector-icons'
import { useEffect } from 'react'; // quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component 
const DetailScreen = (props) => {
    const {productId} = props.route.params
    const product = PRODUCTS.find(item => item.id === productId)
    useEffect(()=>{
         props.navigation.setOptions({
            headerRight: () =>
            <TouchableOpacity 
            onPress={()=> props.navigation.navigate('FavoriteScreen',{productId: product.id})}
            >
             <Entypo name='star' size={30} color="yellow" />
             </TouchableOpacity>
    })
})
    return(
        <ScrollView style={styles.view}>
            <Image style={styles.img} source={{uri: product.image}}/>
            <Text style={styles.textBig}> {product.name}</Text>
            <Text style={styles.text}> {product.description}</Text>
            <Text style={styles.text}> Màn hình: {product.manhinh}</Text>
            <Text style={styles.text}> Kích thước: {product.kichthuoc}</Text>
            <Text style={styles.text}> Hệ điều hành: {product.hdh}</Text>
            <Text style={styles.text}> RAM: {product.RAM}</Text>
            <Text style={styles.text}> Bộ nhớ trong:{product.bonhotrong}</Text>
            <Text style={styles.text}> Chip: {product.chip}</Text>
            <Text style={styles.text}> Pin, Sạc: {product.pinsac}</Text>
        </ScrollView>
    );} 
const styles = StyleSheet.create({
    view:{
        backgroundColor:'#FFEFD5',
    },
    img:{
        width: 375, height: 380, //set width height cho Image 
        alignItems:'center', 
    },
    text:{
        fontSize: 20, 
        fontStyle: 'normal',
        color:'black',
        
    },
    textBig:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'#1E90FF',
    }
})

export default DetailScreen;
