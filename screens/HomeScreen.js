import React, { Component } from 'react';
import {Animated,View, Text,StyleSheet,Image,FlatList,TouchableOpacity } from 'react-native';
import CATEGORIES from '../data/categories';

const HomeScreen =(props) =>{
    return (
       <Animated.View style={styles.flatlist}>
        <FlatList 
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
      </Animated.View>
    );
  }
const styles = StyleSheet.create({
    flatlist:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#F0E68C',
    },
    view:{
        marginTop:50,
        borderWidth:2,
        padding:15,
        margin:15,
        borderRadius:20
    },
    text:{
        fontSize:20,
        textAlign:'left',
    }
})
export default HomeScreen;
