import React, { Component,useEffect } from 'react';
import { View,Image, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import PRODUCTS from '../data/products';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons'
const CartScreen = (props) =>{
    //const favProduc = PRODUCTS.filter(item => item.isFav === true)
    const cartProducts = useSelector(state => state.cartProducts)
    console.log(cartProducts)
    useEffect(()=>{
        props.navigation.setOptions({
            title:'Giỏ hàng',
            
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
    if(cartProducts.length !=0){
    return(
        <FlatList
            numColumns={4}
            style ={styles.flatlist}
            data = {cartProducts}
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
    )
}
    else{
        return(
            <View style={styles.viewBig}>
            <Text style={styles.text}>:(</Text>
            <Text style={styles.text}>Chưa có sản phẩm nào nằm trong giỏ hàng.</Text>
            <Text style={styles.text}>Hãy lựa chọn một sản phẩm đưa vào giỏ hàng</Text>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    flatlist:{
        backgroundColor:'#fff'
    },
    view:{
        marginTop:20
    },
    viewBig:{
        backgroundColor:'#fff',
        flex:1
    },
    text:{
        fontSize:14,
        textAlign:'center',
        color:"#1E90FF", 
        fontWeight:'bold',
        alignSelf:'center'
    },
    img:{
        width: 150, height: 150,
        alignSelf:'center',
        margin:10
    }

})
export default CartScreen;