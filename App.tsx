import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent/>
      <Cadastro/>
    </>
  );
}
