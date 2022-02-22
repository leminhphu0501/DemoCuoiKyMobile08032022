import React from 'react';
import { Animated,Text, View,Image,FlatList,StyleSheet,TouchableOpacity,AnimatedFlatlist} from 'react-native';


import PRODUCTS from '../data/products';
const ShowAllScreen =(props) => {
    const {categoryId} = props.router.params
    const products = PRODUCTS.filter(item => item.categoryId === categoryId)
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
        width:105, 
        height:105,
        margin:5,
    },
    text:{
        fontSize:11,
        textAlign:'center'
    }
});
export default ShowAllScreen;