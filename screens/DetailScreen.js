import React, { useEffect,useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native';
import PRODUCTS from '../data/products';
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import { Entypo } from '@expo/vector-icons'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { color } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons'
const DetailScreen = (props) => {
    const { productId } = props.route.params
    const product = PRODUCTS.find(item => item.id === productId)
    const favProduc = useSelector(state => state.favProduc)
    const isFav = favProduc.some(product => product.id === productId)
    console.log(isFav)
    //const availableProducts = useSelector(state => state.filterProducts)
    const dispatch = useDispatch()
    const [defaulRating,setdefaultRating] =useState(0,0,5)
    const [maxRatting, setmaxRatting] =useState([1,2,3,4,5])
    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    useEffect(() => {
        if(isFav==false){props.navigation.setOptions({
            title: 'Chi tiết sản phẩm',
            headerRight: () =>
                <TouchableOpacity
                    onPress={() =>dispatch({type:'Them_Vao_yeu_thich',productId:productId})}
                >
                <Entypo name='star-outlined' color={'#DCDCDC'} size={30} />
                </TouchableOpacity>
        })
    }
        else if(isFav==true){props.navigation.setOptions({
                title: 'Chi tiết sản phẩm',
                headerRight: () =>
                    <TouchableOpacity
                        onPress={() =>dispatch({type:'Them_Vao_yeu_thich',productId:productId})}
                    >
                    <Entypo name='star' color={'#DCDCDC'} size={30} />
                    </TouchableOpacity>
            })
        }
}
    )
    const CustomRatingBar = () =>{
        return(
            <View style={styles.CustomRatingbarStyle}>
                {
                    maxRatting.map((item,key) => {
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=>setdefaultRating(item)}
                            >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaulRating
                                ? {uri:starImgFilled}
                                : {uri:starImgCorner}
                            }
                            />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    return (
        <ScrollView style={styles.view}>
            <Text style={styles.textBig}> {product.name}</Text>
            <Image style={styles.img} source={{ uri: product.image }} />
            <TouchableOpacity style={styles.icon}
                onPress={() =>dispatch({type:'Them_vao_gio_hang',productId:productId})}
            >
            <FontAweSome name='shopping-cart' color={'gray'} size={36}/>
            <Text style={styles.giohang}> Thêm vào giỏ hàng ?</Text>
            </TouchableOpacity>
            <CustomRatingBar/>
            <Text style={styles.textRating}>{defaulRating + '/' + maxRatting.length}</Text>
            <Text style={styles.textName}>{product.name}</Text>
            <Text style={styles.textgia}> Giá:{product.gia}</Text>
            <Text style={styles.text}> Màn hình: {product.kichthuoc},  {product.manhinh}</Text>
            <Text style={styles.text}> Hệ điều hành: {product.hdh}</Text>
            <Text style={styles.text}> RAM: {product.RAM}</Text>
            <Text style={styles.text}> Bộ nhớ trong:{product.bonhotrong}</Text>
            <Text style={styles.text}> Chip: {product.chip}</Text>
            <Text style={styles.text}> Pin, Sạc: {product.pinsac}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
    },
    img: {
        width: 400, height: 400, //set width height cho Image 
        alignSelf:'center'
    },
    text: {
        fontSize: 18,
        color: 'black',
         fontWeight:'normal',
         textAlign:'center'
    },
    textgia:{
        fontSize:18,
        color:'#1E90FF',
        textAlign:'center'
    },
    textBig: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    textName:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'
    },
    icon:{
        alignItems:'center'
    },
    giohang:{
        color:'gray',
        fontSize:15,
        alignSelf:'center'
    },
    CustomRatingbarStyle:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5
    },
    starImgStyle:{
        width:25,
        height:25,
        resizeMode:'cover'
    },
    textRating:{
        textAlign:'center',
        fontSize:20, 
        // fontWeight:'bold'
    }
})

export default DetailScreen;
