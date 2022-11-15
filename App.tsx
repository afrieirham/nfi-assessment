import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CryptoItem from './components/CryptoItem';

import { data } from './data';

export default function App() {
  const [items, setItems] = useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoTracker</Text>
        <Image source={require('./assets/portrait.jpeg')} style={styles.avatar} />
      </View>
      <View style={styles.listContainer}>
        {items.map((item) =>
          <CryptoItem key={item.id} {...item} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#312e81',
  },
  header: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  listContainer: {
    backgroundColor: '#ffffff'
  }
});
