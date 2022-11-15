import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Crypto } from './types';
import CryptoItem from './components/CryptoItem';

interface APIResponse {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: Crypto[];
}

export default function App() {
  const [mock] = useState(['btc', 'eth', 'usdt', 'xrp']);
  const [real, setReal] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: APIResponse; } = await axios.get('https://data.messari.io/api/v1/assets');
      const filtered = data.data.filter(coin => mock.includes(coin.symbol.toLowerCase()));
      setReal(filtered);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoTracker</Text>
        <Image source={require('./assets/portrait.jpeg')} style={styles.avatar} />
      </View>
      <View style={styles.listContainer}>
        {real.map((item) =>
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
