import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>CryptoTracker</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: '#312e81' },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
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
