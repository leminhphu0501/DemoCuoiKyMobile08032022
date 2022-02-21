import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import DetailScreen from "../screens/DetailScreen";
import { Ionicons } from '@expo/vector-icons';
import FavoriteScreen from "../screens/FavoriteScreen";
const Tab = createBottomTabNavigator();
const MyTabs =() => {
    return (
      <Tab.Navigator screenOptions={{
        headerTintColor:'#3688E7',
        tabBarActiveTintColor:'red',
        tabBarActiveBackgroundColor:'#fff',
        tabBarInactiveBackgroundColor: '#FFFF33',
        
     }}>
        <Tab.Screen options={{
          tabBarLabel:'Trang chủ',
          tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
    }} name="HomeScreen" component={HomeScreen} />
        <Tab.Screen options={{
          tabBarLabel:'Sản Phẩm',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="logo-buffer" color={color} size={size} />
      ),
    }} name="ProductScreen" component={ProductScreen} />
        <Tab.Screen options={{
          tabBarLabel:'Chi tiết sản phẩm',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="alert-circle-outline" color={color} size={size} />
      ),
    }}  name="DetailScreen" component={DetailScreen} />
    <Tab.Screen options={{
      tabBarLabel:'Mục yêu thích',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="star" color={'#fff'} size={size} />
      ),
    }} name="FavoriteScreen"  component={FavoriteScreen} />
      </Tab.Navigator>

    );
  }
export default MyTabs;