import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import mobile from "../assets/mobile.jpg";
import satellite from "../assets/satellite.jpg";
import combination from "../assets/combination.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate.openDrawer;
            console.log(navigation);
            navigation.navigate("HomeStack", {
              screen: "mobile",
              inital: false
            })
          }}>
          <Image source={mobile}
            style={{
              height: 300,
              width: 350,
              borderColor: "black",
              borderWidth: 2,
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'satellite',
              inital: false
            })
          }}>
          <Image source={satellite}
            style={{
              height: 300,
              width: 350,
              borderColor: "black",
              borderWidth: 2,
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          // onPress={() => { alert("Disease") }}>
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'satellite_mobile',
              inital: false
            })
          }}>
          <Image source={combination}
            style={{
              height: 300,
              width: 350,
              borderColor: "black",
              borderWidth: 2,
            }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 10,
    marginBottom: 20,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default HomeScreen;

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button}
//         onPress={() => { alert("Crop") }}>
//         <Image source={satellite}
//           style={{
//             height: 220,
//             width: 350,
//             borderWidth: 2,
//             borderColor: "black",
//           }} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}
//         onPress={() => { alert("Fertilizer") }}>
//         <Image source={mobile}
//           style={{
//             height: 220,
//             width: 350,
//             borderWidth: 2,
//             borderColor: "black",
//           }} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}
//         onPress={() => { alert("") }}>
//         <Image source={combination}
//           style={{
//             height: 220,
//             width: 350,
//             borderWidth: 2,
//             borderColor: "black",
//           }} />
//       </TouchableOpacity>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     // backgroundColor: '#000000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#859a9b',
//     borderRadius: 10,
//     // padding: 10,
//     marginBottom: 20,
//     // shadowColor: '#303838',
//     // shadowOffset: { width: 10, height: 10},
//     shadowRadius: 10,
//     shadowOpacity: 0.35,
//   },
// });

// export default HomeScreen ;