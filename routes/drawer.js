import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AboutScreen from '../screens/about';
import HomeScreen from '../screens/homescreen';
import HomeStack from './homeStack';


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
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;