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

import {firebaseAuth} from '../firebase.js';
const width = Dimensions.get('screen').width;

export default class LoginClient extends Component {

  constructor() {
    super();
    this.state = {
      email: 'celso@gmail.com',
      senha: '123456',
      mensagem: ''
    }
  }
  efetuaLogin(){
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.senha).catch(function(error) {
      // Handle Errors here.
      console.log("erro!!");
      // ...
    });
    console.log("Login realizado com sucesso!!");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/belivery-logo.png')}></Image>
        <View style={styles.form}>
          <TextInput style={styles.input}
              placeholder="Digite seu email..."
              onChangeText={texto => this.setState({email: texto})}
              autoCapitalize="none"/>

          <TextInput style={styles.input}
              placeholder="Digite sua senha..."
              onChangeText={texto => this.setState({senha: texto})}
              secureTextEntry={true}/>

          <Button title="Entrar" onPress={this.efetuaLogin.bind(this)}/>
        </View>

        <Text style={styles.mensagem}>
          {this.state.mensagem}
        </Text>
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