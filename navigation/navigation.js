import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../screens/FavoriteScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterScreen from '../screens/FilterScreen'
import { Ionicons } from '@expo/vector-icons';
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import CartScreen from '../screens/CartScreen';
import ShowAllScreen from '../screens/ShowAllScreen'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack =() =>{
    return(
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
    )
}
const ProductStack =() =>{
    return(
    <Stack.Navigator>
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
    )
}
const FavStack = () =>{
    return(
    <Stack.Navigator>

        <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />

    </Stack.Navigator>
    )
}
const FilterStack = () =>{
    return(
    <Stack.Navigator>
    <Stack.Screen name='FilterScreen' component={FilterScreen} />

</Stack.Navigator>)
}
const ShowAllStack =() =>{
    return(
        <Stack.Navigator>
        <Stack.Screen name='ShowAllScreen' component={ShowAllScreen} />
    </Stack.Navigator>)
}
const CartStack =()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name='CartScreen' component={CartScreen} />
    
    </Stack.Navigator>)
}
const HomeTab = () =>{
    return(
        <Tab.Navigator screenOptions={{
            headerTintColor:'#3688E7',
            tabBarActiveTintColor:'#fff',
            tabBarActiveBackgroundColor:'#778899',
            tabBarInactiveBackgroundColor: '#fff',
           
         }}>
            <Tab.Screen options={{
            headerShown:false,
              tabBarLabel:'Trang chủ',
              tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} name="Trang chủ" component={HomeStack} />
        <Tab.Screen options={{
            headerShown:false,
            tabBarLabel:'Mục yêu thích',
            color:'black',
            tabBarIcon: ({ color, size }) => (
            <FontAweSome name='star' color={color} size={size} />
          ),
        }} name="Mục yêu thích" component={FavStack} />
        <Tab.Screen options={{
            headerShown:false,
            tabBarLabel:'Giỏ hàng',
            color:'black',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }} name="Giỏ hàng"  component={CartStack} />
          </Tab.Navigator>
    )
}
const Navigation = () =>
{
    return(
        <NavigationContainer>
            <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                  backgroundColor: '#fff',
                  width: 240,
                },
              }}
            >
                <Drawer.Screen name="Home" component={HomeTab} options={{headerShown:false}}/>
                <Drawer.Screen name="Filter" component={FilterStack} options={{headerShown:false}} />
                <Drawer.Screen name="ShowAll" component ={ShowAllStack} options={{headerShown:false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;