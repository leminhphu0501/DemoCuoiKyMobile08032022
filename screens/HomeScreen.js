import React, { Component, useEffect } from 'react';
import {Animated,View, Text,StyleSheet,Image,FlatList,TouchableOpacity } from 'react-native';
import CATEGORIES from '../data/categories';
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import { ImageSlider } from "react-native-image-slider-banner";
import PRODUCTS from '../data/products';
const HomeScreen =(props) =>{
    useEffect(()=>{
        props.navigation.setOptions({
            title:'Trang chủ',
            headerTitleStyle:{alignSelf:'center'},
            headerLeft: ()=>(
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={() =>props.navigation.openDrawer()}
                    >
                    <Ionicons name="ios-menu" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }),[props.navigation]
    return (
       <View style={styles.viewBig}>
            <View style= {styles.headerContainer}>
                <View style={styles.inputContainer}>
                    <FontAweSome name="search" size={30} color="#969696"/>
                    <Text style={styles.inputText}>Bạn tìm gì hôm nay ?</Text>
            </View>
            <View style={styles.CartContainer}>
            <FontAweSome name='shopping-cart' size={30} color="#fff" />
            </View>
            </View>
            <ImageSlider
            data={[
            {img: 'https://cdn.tgdd.vn/2022/03/banner/S22-830-300-830x300-1.png'},
            {img: 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816843611792369_F-H1_800x300.png'},
            {img: 'https://cdn.tgdd.vn/2022/02/banner/reno6z-830-300-830x300.png'},
            {img: 'https://cdn.tgdd.vn/2022/02/banner/dh83-830-300-830x300-1.png'},
            {img: 'https://cdn.tgdd.vn/2022/02/banner/830-300-830x300-19.png'},
            {img: 'https://cdn.tgdd.vn/2022/03/banner/830-300-830x300-1.png'},
            {img: 'https://cdn.tgdd.vn/2022/03/banner/830-300-830x300-2.png'}
        ]}
        autoPlay={true}
        caroselImageStyle={{height: 150}}
        //indicatorContainerStyle={{bottom: 10}}
        //closeIconColor="#fff"
    />
        <FlatList 
            numColumns={4}
            data = {CATEGORIES}
            renderItem={({item}) => 
        <TouchableOpacity
        onPress={() => props.navigation.navigate('ProductScreen',{categoryId: item.id})}
        >
            <View style={[styles.view, {backgroundColor: item.color}]}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            </TouchableOpacity>}
        keyExtractor={item => item.id}
         />
      </View>
    );
  }
const styles = StyleSheet.create({
    // flatlist:{
    //     flex:1,
    //     flexDirection:'column',
    //     justifyContent:'center',
    //     backgroundColor:'#1e88e5',
    //     alignContent:'center'
    // },
    viewBig:{
        backgroundColor:'#f5fffa',
        flex:1
        
    },
    view:{
        marginTop:20,
        //borderWidth:0.5,
        padding:15,
        margin:10,
        borderRadius:3.5,
        backgroundColor:'#FFFAFA'
    },
    text:{
        fontSize:14,
        textAlign:'center',
        fontWeight:'bold',
        color:'#969696',
    },
    headerContainer:{
        flexDirection:'row',
        paddingTop:20,
        backgroundColor:'#90EE90'
    },
    inputContainer:{
        backgroundColor:'#fff',
        flexDirection:'row',
        marginLeft:15,
        flex:1,
        marginBottom:2,
        alignItems:'center',
        paddingVertical: 8,
        paddingHorizontal:12,
        borderRadius:2
    },
    inputText:{
        color:'#969696',
        fontSize:14,
        marginLeft:8,
        fontWeight:'500'
    },
    CartContainer:{
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
  /*  image:{
        width: 350 ,height:350,margin:20
    }*/
    // img:
    // {
    //     width:30
    // }
})
export default HomeScreen;