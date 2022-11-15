import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import AddCrypto from './screens/AddCrypto';
import { RootStackParamList } from './types';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#312e81' } }}>
          <Stack.Screen name="Home" component={Home} options={{ title: 'CryptoTracker' }} />
          <Stack.Screen name="AddCrypto" component={AddCrypto} options={{ title: 'Add Cryptocurrency' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}