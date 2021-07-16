import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'bowser', id: '6' },
    { name: 'toad', id: '7' },
  ])
  const pressHandler = (id) => {
    setPeople((prevPeople) => prevPeople.filter(item => item.id !== id))
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(({ name, key }) => (
          <View key={key}>
            <Text style={styles.item}>{name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
