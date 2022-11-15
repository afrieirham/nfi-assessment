import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTicker } from '../redux/tickerSlice';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddCrypto'>;

export default function AddCrypto({ navigation }: Props) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();


  const onSubmit = () => {
    dispatch(addTicker(input));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Enter crypto ticker' onChangeText={(e) => setInput(e)} value={input} />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: 'flex',
  },
  textInput: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    padding: 20,
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3730a3',
  },
  buttonText: {
    color: '#ffffff'
  }
});
