import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import AddCrypto from './screens/AddCrypto';
import { RootStackParamList } from './types';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Header({ title }: { title: string; }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => <Header title='CryptoTracker' />,
              headerStyle: { backgroundColor: '#312e81' },
            }} />
          <Stack.Screen
            name="AddCrypto"
            component={AddCrypto}
            options={{
              headerTitle: () => <Header title='Add a Cryptocurrency' />,
              headerStyle: { backgroundColor: '#312e81' },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}



const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 40
  },
  title: {
    flex: 1,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
