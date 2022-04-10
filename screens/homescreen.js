import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate.openDrawer;
            console.log(navigation);
            navigation.navigate("HomeStack", {
              screen: "diseaseDetection",
              inital: false
            })
          }}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'cropRecommendation',
              inital: false
            })
          }}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          // onPress={() => { alert("Disease") }}>
          onPress={() => {
            navigation.navigate('HomeStack', {
              screen: 'fertilizerRecommendation',
              inital: false
            })
          }}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
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