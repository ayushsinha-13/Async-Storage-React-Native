import {View, Text, Button} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [name , setName] = useState(null)
  const [age, setAge] = useState(null)

  const user_details = {Name : "Ayush",Age: 21}

  const setData = () => {
    AsyncStorage.setItem("user_details",JSON.stringify(user_details))
    console.log("set data")
  }

  const showData = async() => {
    let user = await AsyncStorage.getItem("user_details")
    user = JSON.parse(user)

    setName(user.Name)
    setAge(user.Age)
  }

  const clearData = () => {
    AsyncStorage.clear()
  }


  return (
    <View>
      <View style={{ margin: 20,}}>
        <Button title="Set Data" onPress={setData} color={"blue"} />
      </View>

      <View style={{ margin: 20,}}>
        <Button title="Show Data" onPress={showData} color={"green"} />
      </View>

      <View style={{ margin: 20, }}>
        <Button title="Clear Data" onPress={clearData} color={"red"} />
      </View>

      {
        name ? <Text style={{fontSize: 19, color:"#000",margin: 20}}>{name}  {age}</Text> : null
      }
    </View>
  );
};

export default App;
