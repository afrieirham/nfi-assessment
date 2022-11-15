import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

import { Crypto, RootStackParamList } from '../types';
import CryptoItem from '../components/CryptoItem';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

interface APIResponse {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: Crypto[];
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
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
        <Button title='Add a Cryptocurrency' onPress={() => navigation.navigate('AddCrypto')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffffff'
  }
});
