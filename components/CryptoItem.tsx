import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CryptoItem() {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Image source={require('./../assets/portrait.jpeg')} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Bitcoin</Text>
          <Text style={styles.symbol}>BTC</Text>
        </View>
      </View>
      <View>
        <Text style={styles.price}>$7,215.19</Text>
        <Text style={styles.priceChange}>1.82%</Text>
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
  price: {
    fontWeight: 'bold',
  },
  priceChange: {

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
});
