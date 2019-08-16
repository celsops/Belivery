
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
// import console = require('console');

export default class Home extends Component {
  // static navigationOptions = {
  //     drawerLabel: 'Home',
  // };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../img/belivery-logo.png")}></Image>
        <View style={styles.form}>
            <Text>Bem-vindo ao Belivery</Text>
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