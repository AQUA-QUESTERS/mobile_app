import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import * as React from 'react';
import AboutScreen from '../screens/about';
import HomeStack from './homeStack';
import Account from '../screens/account';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ setSignedIn }) => {
    return (

        <Drawer.Navigator >
            <Drawer.Screen name="HomeStack" component={HomeStack}
                options={{
                    title: 'Home'
                }}
            />
            <Drawer.Screen name="About">
                {props => <AboutScreen {...props} setSignedIn={setSignedIn} />}
            </Drawer.Screen>
            <Drawer.Screen name="Account">
                {props => <Account {...props} setSignedIn={setSignedIn} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;