import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {

  const [name, setName] = useState("");
  const handleNameChange = (inputText) => {
    console.log(inputText, '*-*-*-*-*-')
    //setName(inputText);
  }
  console.log(name, 'name')

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Text>Hello User</Text>

      <Button title="Click me" onPress={() => alert("Button Clicked")} />

      <View >
        <TextInput value={name} placeholder="Enter your name" onChangeText={setName} />
        
        <Text>Your name: {name}</Text>

        <Button title="Send Name" onPress={() => alert(name)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
});
