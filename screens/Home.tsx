import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';

import { Crypto, RootStackParamList } from '../types';
import CryptoItem from '../components/CryptoItem';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootState } from '../store';

interface APIResponse {
  status: {
    elapsed: number;
    timestamp: string;
  };
  data: Crypto[];
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { tickers } = useSelector((state: RootState) => state.tickers);
  const [real, setReal] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data }: { data: APIResponse; } = await axios.get('https://data.messari.io/api/v1/assets');
    const filtered = data.data.filter(coin => tickers.includes(coin.symbol.toLowerCase()));
    setReal(filtered);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [tickers]);



  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={fetchData}
      />
    }>
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
