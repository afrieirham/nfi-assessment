import { ScrollView, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';


type Props = NativeStackScreenProps<RootStackParamList, 'AddCrypto'>;

export default function AddCrypto({ navigation }: Props) {
  return (
    <ScrollView>
      <Text>Hello World</Text>
    </ScrollView>
  );
}

