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
  Picker,
  ScrollView
} from 'react-native';

import {db,firebaseAuth} from '../firebase.js';

const width = Dimensions.get('screen').width;

export default class RegisterClient extends Component {

  constructor() {
    super();
    this.state = {
      nomeUsuario: 'celso',
      sobrenomeUsuario: 'vasconcelos',
      email: 'celso@gmail.com',
      numero: '+5582987328725',
      senha: '123456',
      senha2:'123456',
      cpf:'123456789',
      mensagem: ''
    }
  }
  efetuaCadastro(){
    console.log("Testando o cadastro de usuario");
    firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.senha).catch(function(error) {
      console.log("Erros ocorreram");
      // ...
    });
    console.log("Testando...");
    db.ref("/"+this.state.cpf).set({
        nome:this.state.nomeUsuario,
        sobrenome:this.state.sobrenomeUsuario,
        email:this.state.email,
        senha:this.state.senha,

    });
    // db.ref("/"+"senha").set({user:"nomeUsuario"});
    console.log("Sucess")
    return;
  }
  render() {
    return (
      // <View style={styles.container}>
      <ScrollView style = {{paddingTop: 50}}>
        {/* <Text style={styles.titulo}>Belivery</Text> */}
        <View style={styles.form}>

            <TextInput style={styles.input}
              placeholder="Nome..."   
              onChangeText={texto => this.setState({nomeUsuario: texto})}
              autoCapitalize="none"/>

            <TextInput style={styles.input}
              placeholder="Sobrenome..."   
              onChangeText={texto => this.setState({SobrenomeUsuario: texto})}
              autoCapitalize="none"/>
            <View style = {styles.number}>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 100,}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    
                    <Picker.Item label="+55" value="+55" />
                    <Picker.Item label="+1" value="+1" />
                </Picker>

                <TextInput style={[styles.input,{flex:2}]}
                placeholder="Número..."
                keyboardType = "number-pad"   
                onChangeText={texto => this.setState({numero: texto})}
                autoCapitalize="none"/>
            </View>

            <TextInput style={styles.input}
              placeholder="Email..."   
              onChangeText={texto => this.setState({email: texto})}
              autoCapitalize="none"/>

            <TextInput style={styles.input}
              placeholder="CPF"
              keyboardType = "number-pad"     
              onChangeText={texto => this.setState({cpf: texto})}
              autoCapitalize="none"/>

            <TextInput style={styles.input}
              placeholder="Senha..."
              onChangeText={texto => this.setState({senha: texto})}
              secureTextEntry={true}/>
            <TextInput style={styles.input}
              placeholder="Digite a senha novamente..."
              onChangeText={texto => this.setState({senha2: texto})}
              secureTextEntry={true}/>

            <Button title="Cadastre-se" onPress={this.efetuaCadastro.bind(this)}/>
        </View>

        <Text style={styles.mensagem}>
          {this.state.mensagem}
        </Text>
        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number:{
      flexWrap:'wrap',
      flexDirection:'row',
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