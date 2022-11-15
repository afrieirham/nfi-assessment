import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CryptoItem from './components/CryptoItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoTracker</Text>
        <Image source={require('./assets/portrait.jpeg')} style={styles.avatar} />
      </View>
      <View style={styles.listContainer}>
        <CryptoItem />
        <CryptoItem />
        <CryptoItem />
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
