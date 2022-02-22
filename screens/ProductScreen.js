import React from 'react';
import { Animated,Text, View,Image,FlatList,StyleSheet,TouchableOpacity,AnimatedFlatlist} from 'react-native';


import PRODUCTS from '../data/products';

const ProductScreen= (props) => {
    
    const {categoryId} = props.route.params;
   //Danh mục sản phẩm lọc theo yêu cầu
    const products = PRODUCTS.filter(item => item.categoryId === categoryId)
    console.log(products)
    return(
    
       <FlatList style={styles.view}
        numColumns={3}
        data = {products}
        renderItem={({item}) => 
        <TouchableOpacity
        onPress={()=> props.navigation.navigate('DetailScreen',{productId: item.id})}
        >
            <View style={styles.viewcha} >
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
    viewcha:{
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
export default ProductScreen;