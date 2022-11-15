import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Crypto } from '../types';
import CryptoItem from '../components/CryptoItem';

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
    <ScrollView>
      <View style={styles.listContainer}>
        {real.map((item) =>
          <CryptoItem key={item.id} {...item} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffffff'
  }
});
