import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Navigation = () =>
{
    return(
        <NavigationContainer>
             <Stack.Navigator 
             screenOptions={{
                 headerStyle:{
                     backgroundColor:'#87CEFA'
                 }
             }

             }
             >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;