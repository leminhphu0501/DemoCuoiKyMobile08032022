import React, { Component,useEffect } from 'react';
import { View,Image, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import CATEGORIES from '../data/categories';
import PRODUCTS from '../data/products';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons'
const FavoriteScreen = (props) =>{
    //const {productId} = props.route.params
    const favProducts = PRODUCTS.filter(item => item.isFav === true)
    const favProduc = useSelector(state => state.favProduc)
    //const isFav = favProduc.some(product => product.id === productId)
    useEffect(()=>{
        props.navigation.setOptions({
            title:'Yêu thích',
            headerTitleStyle:{alignSelf:'center'},
            headerLeft: ()=>(
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={() =>props.navigation.openDrawer()}
                    >
                    <Ionicons name="ios-menu" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }),[props.navigation]
    console.log(favProduc)
    if(favProduc.length !=0){
    return(
        //<View style={styles.viewBig}>
        <FlatList
            style={styles.viewBig}
            numColumns={4}
            data = {favProduc}
            renderItem={({item}) => 
        <TouchableOpacity
            onPress={()=> props.navigation.navigate('DetailScreen',{productId: item.id})}
        >
            <View style={styles.view} >
                <Text style={styles.text}>{item.name}</Text>
                <Image style={styles.img}
                source ={{uri: item.image}} 
             />    
                <Text style={styles.text}>{item.gia}</Text>
             </View>             
        </TouchableOpacity>
        }
        
            keyExtractor={item => item.id}
        />
        //</View>
    )        
}
else{
    return(
        <View style={styles.viewBig}>
        <Text style={styles.textOut}>Không có sản phẩm nào được yêu thích !</Text>
        </View>
    )
}   
}
const styles = StyleSheet.create({
    view:{
        backgroundColor:'#fff',
    },
    viewBig:{
        backgroundColor:'#fff',
        flex:1
    },
    text:{
        fontSize:18,
        textAlign:'center',
        color:"#1E90FF", 
        fontWeight:'bold',
        margin:10
    },
    img:{
        width: 100, height: 100,
        alignSelf:'center',
    },
    textOut:{
        fontSize:18,
        textAlign:'center',
        color:"#1E90FF", 
        fontWeight:'bold',
        margin:10
    },
})
export default FavoriteScreen;