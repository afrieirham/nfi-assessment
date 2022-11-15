import { Image, StyleSheet, Text, View } from 'react-native';
import ArrowUpRight from '../assets/icons/arrow-up-right.svg';
import ArrowDownLeft from '../assets/icons/arrow-down-left.svg';

interface CryptoProps {
  symbol: string;
  name: string;
  metrics: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  };
}

function PriceChange({ priceChange }: { priceChange: string; }) {
  const positiveChange = Number(priceChange) > 0;

  return (
    <View style={styles.priceChangeContainer}>
      {positiveChange ? <ArrowUpRight /> : <ArrowDownLeft />}
      <Text style={[styles.priceChange, { color: positiveChange ? '#16a34a' : '#dc2626' }]}>{priceChange}%</Text>
    </View>
  );
}

export default function CryptoItem(props: CryptoProps) {
  const { symbol, name, metrics } = props;
  const price = metrics.market_data.price_usd.toFixed(2);
  const priceChange = metrics.market_data.percent_change_usd_last_24_hours.toFixed(2);


  const logoUri = `https://assets.coincap.io/assets/icons/${symbol.toLocaleLowerCase()}@2x.png`;


  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Image source={{ uri: logoUri }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <PriceChange priceChange={priceChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  symbol: {

  },
  priceContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
  },
  priceChangeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceChange: {

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  positive: {
    color: '#16a34a'
  }
});
