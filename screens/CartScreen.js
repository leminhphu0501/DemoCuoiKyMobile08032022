import React, { Component } from 'react';
import { View,Image, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import CATEGORIES from '../data/categories';
import PRODUCTS from '../data/products';
const CartScreen = (props) =>{
    const favProduc = PRODUCTS.filter(item => item.isFav === true)
    console.log(favProduc)
    return(
        <FlatList
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
             </View>             
        </TouchableOpacity>
        }
        
        keyExtractor={item => item.id}
        />
    )    
}
const styles = StyleSheet.create({
    view:{
        backgroundColor:'#fff'
    },
    text:{
        fontSize:20,
        textAlign:'center'
    },
    img:{
        width: 250, height: 250,
        alignSelf:'center'
    }

})
export default CartScreen;