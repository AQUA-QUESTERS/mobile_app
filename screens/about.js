import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
const AboutScreen = ({setSignedIn}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        {/* <Button onClick={setSignedIn(false)}></Button> */}
        </View>
    );
}

export default AboutScreen;