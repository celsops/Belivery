import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';
// import console = require('console');

const width = Dimensions.get('screen').width;

export default class Inicio extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../img/belivery-logo.png")}></Image>
        <View style={styles.form}>
            <Button title="Ja tenho conta" onPress={console.log("Redirecionar")}/>

          <Button title="Cadastrar-se" onPress={console.log("redirecionar")}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  form: {
    width: width * 0.8
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  mensagem: {
    marginTop: 15,
    color: '#e74c3c'
  }
})