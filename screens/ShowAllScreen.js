import React,{useEffect} from 'react';
import { Animated,Text, View,Image,FlatList,StyleSheet,TouchableOpacity,AnimatedFlatlist} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import PRODUCTS from '../data/products';
const ShowAllScreen =(props) => {
    //const {categoryId} = props.navigate.params
    const products = PRODUCTS;//.filter(item => item.categoryId === categoryId)
    useEffect(()=>{
        props.navigation.setOptions({
            title:'Tất cả các sản phẩm',
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
        textAlign:'center'
    }
});
export default ShowAllScreen;