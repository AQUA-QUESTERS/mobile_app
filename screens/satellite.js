// import * as React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from "expo-location";

// import { useEffect, useState } from "react"

// export default function GPS() {
    
//   // const [location, setLocation] = useState();
//   // const getLocation = async () => {
//   //   try {
//   //     const { granted } = await Location.requestPermissionsAsync();
//   //     if (!granted) return;
//   //     const {
//   //       coords: { latitude, longitude },
//   //     } = await Location.getCurrentPositionAsync();
//   //     setLocation({ latitude, longitude });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }

//   // };
//   // useEffect(() => {
//   //   getLocation();
//   // }, []);
//   // return getLocation;
//   // }
//   toServer = async () => {
//     fetch("http://192.168.29.12:8016/gps", {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(() => {
//         console.log(location);
//         return location;
//       })
//     })
//     //   .then((response) => console.log(response));
//     // // console.log(useLocation().getLocation());
//   }
//   return (
//     // code to add button to call the function getLocation
//     <View style={styles.container}>
//       <Text>GPS</Text>
//       <Button
//         title="Get Location"
//         onPress={() => {
//           toServer();
//         }}
//       />
//     </View>
//   );
// }

//     // <View style={styles.container}>
//     //   <Text style={styles.paragraph}>
//     //   </Text>
//     // </View>}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// const useLocation = () => {
//   const [location, setLocation] = useState();

//   const getLocation = async () => {
//     try {
//       const { granted } = await Location.requestPermissionsAsync();
//       if (!granted) return;
//       const {
//         coords: { latitude, longitude },
//       } = await Location.getCurrentPositionAsync();
//       setLocation({ latitude, longitude });
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(location);
//   };

//   // useEffect(() => {
//   //   getLocation();
//   // }, []);

//   // return location;
// };
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import config from "../utils/config";

// You can import from local files

let apiKey = 'YOUR_API_KEY';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      Location.setGoogleApiKey(apiKey);

      // console.log(status)

      let { coords } = await Location.getCurrentPositionAsync();

      setLocation(coords);

      console.log(coords.latitude, coords.longitude);
      
      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        // console.log(regionName, 'nothing');
      }
      fetch(config.flask2_ip, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(coords)
      })
      // console.log();
    })();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location
          ? 'Waiting'
          : `Lat: ${location.latitude} \nLong: ${
              location.longitude
            } \n${JSON.stringify(address?.['subregion'])}`}
      </Text>
      <TouchableOpacity onPress={getLocation}>
        <View
          style={{
            height: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text style={styles.btnText}> GET LOCATION </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});
