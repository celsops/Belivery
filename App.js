import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './screens/Inicio';
import RegisterClient from './screens/RegisterClient';
import LoginClient from './screens/LoginClient';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginClient></LoginClient>
      {/* <RegisterClient></RegisterClient> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
