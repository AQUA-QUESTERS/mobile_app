import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

export default function FertilizerRecommendation() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff", alignItems: "center" }}>
      <View style={{ width: 200, height: 500, backgroundColor: "yellow", padding: 50 }}>
        <View >
          <Text >Get informed advice on fertilizer based on soil</Text>
          <View>
            <Text>Nitrogen</Text>
            <TextInput
              placeholder="Enter the value(Example:50)" onChange={(e) => setCount1(e.target.value())} required />
            <Text>Phosporous</Text>
            <TextInput placeholder="Enter the value(Example:50)" onChange={count2 => setCount2(count2)} required />
            <Text>Potassium</Text>
            <TextInput placeholder="Enter the value(Example:50)" onChange={count3 => setCount3(count3)} required />
            <Text>ph level</Text>
            <TextInput placeholder="Enter the value" onChange={count4 => setCount4(count4)} required />
            <Text>Rainfall(in mm)</Text>
            <TextInput placeholder="Enter the value" onChange={count5 => setCount5(count5)} required />
            <select name="Crop" id="Crop" placeholder="Crop" >
              <option value="" disabled selected>Select Crop</option>
              <option value="rice">rice</option>
              <option value="maize">Maize</option>
              <option value="chickpea">chickpea</option>
              <option value="kidneybeans">kidneybeans</option>
              <option value="pigeonpeas">pigeonpeas</option>
              <option value="mothbeans">mothbeans</option>
              <option value="mungbeans">mungbeans</option>
              <option value="blackgram">blackgram</option>
              <option value="lentil">lentil</option>
              <option value="banana">banana</option>
              <option value="pomegranate">pomegranate</option>
              <option value="mango">mango</option>
              <option value="grapes">grapes</option>
              <option value="watermelon">watermelon</option>
              <option value="muskmelon">muskmelon</option>
              <option value="apple">apple</option>
              <option value="orange">orange</option>
              <option value="papaya">papaya</option>
              <option value="coconut">coconut</option>
              <option value="cotton">cotton</option>
              <option value="jute">jute</option>
              <option value="coffee">coffee</option>
            </select>
            <Button title="Submit" onPress={() => console.log(count1)} />
          </View>
        </View>
      </View>
    </View>
  )
};