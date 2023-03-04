import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Cadastro from './src/screens/Cadastro';
import Detalhes from './src/screens/Detalhes';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent/>
      <Detalhes/>
    </>
  );
}
