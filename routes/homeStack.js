import * as React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/homescreen';
import MobileCaptured from '../screens/mobile';
import GPS from '../screens/satellite';
import Image_GPS from '../screens/satellite_mobile';

const HomeStack = () => {
    const Stack = createStackNavigator();
    return(
            <Stack.Navigator initialRouteName="Home" 
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="mobile" component={MobileCaptured} />
                <Stack.Screen name="satellite" component={GPS} />
                <Stack.Screen name="satellite_mobile" component={Image_GPS} />
            </Stack.Navigator>
    )
}
export default HomeStack;
