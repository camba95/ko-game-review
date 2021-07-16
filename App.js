import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Kevin')
  const [age, setAge] = useState(26)

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput

        style={styles.input}
        placeholder='e.g. Jhon Doe'
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. 25'
        keyboardType='numeric'
        onChangeText={(value) => setAge(value)}
      />
      <Text>My name is {name} and I am {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
