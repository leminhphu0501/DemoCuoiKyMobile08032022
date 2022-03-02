import React,{useEffect} from 'react';
import {Text, View,Image,FlatList,StyleSheet,TouchableOpacity,} from 'react-native';
import PRODUCTS from '../data/products';
import {Entypo} from '@expo/vector-icons/Entypo'
import FavoriteScreen from './FavoriteScreen';
import { useSelector } from 'react-redux';
const ProductScreen= (props) => {
    useEffect(() =>{
    props.navigation.setOptions({
        title:'Sản phẩm',})
    })    
    const {categoryId} = props.route.params;
    // Lấy thông tin sản phẩm từ store
    const availableProducts = useSelector((state) => state.filterProducts)
    //let favorite=[{id:'5',isFav:true}]
    const products = availableProducts.filter(item => item.categoryId === categoryId)
    //const data = useSelector()
    //products.forEach(s=>{
        //let f = favorite.find(x=>x.id== s.id);
        //if(f != null)
        //{
            //s.isFav = f.isFav
        //}
    //})
    return(    
       <FlatList style={styles.view}
            numColumns={3}
            data = {products}
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
};
const styles = StyleSheet.create({
    view:{
        flexDirection:'column',
        backgroundColor:'#fff'
    },
    img:{
        width:125, 
        height:125,
        margin:5,
    },
    text:{
        fontSize:11,
        textAlign:'center',
        alignSelf:'center'
    }
});
export default ProductScreen;