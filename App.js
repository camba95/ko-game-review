import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [person, setPerson] = useState({ name: 'Franco', age: 22 })
  const clickHandler = () => setPerson({ name: 'Kevin', age: 26 })
  return (
    <View style={styles.container}>
      <Text>My name is {person.name} and I am {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='update name'
          onPress={clickHandler}
        />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
