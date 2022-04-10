import * as React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/homescreen';
import DiseaseDetection from '../screens/diseaseDetection';
import CropRecommendation from '../screens/cropRecommendation';
import FertilizerRecommendation from '../screens/fertilizerRecommendation';

const HomeStack = () => {
    const Stack = createStackNavigator();
    return(
            <Stack.Navigator initialRouteName="Home" 
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="diseaseDetection" component={DiseaseDetection} />
                <Stack.Screen name="cropRecommendation" component={CropRecommendation} />
                <Stack.Screen name="fertilizerRecommendation" component={FertilizerRecommendation} />
            </Stack.Navigator>
    )
}
export default HomeStack;
