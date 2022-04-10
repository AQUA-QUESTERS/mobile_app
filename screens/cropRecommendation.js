import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';


export default function CropRecommendation() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff", alignItems: "center" }}>
      <View style={{ width: 200, height: 500, backgroundColor: "yellow", padding: 50 }}>
        <View >
          <Text >Find out the most suitable crop to grow in your farm</Text>
          <View>
            <Text>Nitrogen</Text>
            <TextInput
              placeholder="Enter the value(Example:50)" onChange={(e) => setCount1(e.target.value)} />
            <Text>Phosporous</Text>
            <TextInput
              placeholder="Enter the value(Example:50)" onChange={(e) => setCount2(count2)}
            />
            <Text>Potassium</Text>
            <TextInput
              placeholder="Enter the value(Example:50)" onChange={(count3) => setCount3(count3)} />
            <Text>ph level</Text>
            <TextInput
              placeholder="Enter the value" onChange={(count4) => setCount4(count4)}
            />
            <Text>Rainfall(in mm)</Text>
            <TextInput
              placeholder="Enter the value" onChange={(count5) => setCount5(count5)} />
            <Button title="Submit" onPress={() => console.log(count1)} />
          </View>
        </View>
      </View>
    </View>
  )
};