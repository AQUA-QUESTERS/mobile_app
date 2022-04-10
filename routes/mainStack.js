import * as React from 'react';
import { useState } from 'react';
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../routes/drawer';

const MainStack = () => {
    const Stack = createStackNavigator();
    const [signedIn, setSignedIn] = useState(false)
    return (
        <NavigationContainer>

            {!signedIn ? (
                <Stack.Navigator initialRouteName="LoginScreen"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="LoginScreen">
                        {props => <LoginScreen {...props} setSignedIn={setSignedIn} />}
                    </Stack.Screen>
                    <Stack.Screen name="RegisterScreen">
                        {props => <RegisterScreen {...props} setSignedIn={setSignedIn} />}
                    </Stack.Screen>
                </Stack.Navigator>
            ) : <DrawerNavigator setSignedIn={setSignedIn}/>
            }
        </NavigationContainer >
    );
}
export default MainStack;
