import React, { Component } from 'react';
import { View, Dimensions, TextInput, Picker, StyleSheet, ImageBackground, Button, ScrollView } from 'react-native';

import UserClass from "../models/UserClass";
import UserDAO from '../DAOs/UserDAO';

import PhoneWithPrefixePicker from './components/PhoneWithPrefixePicker';


const screen = Dimensions.get('screen');
const profissionsList = ['Cabeleleiro', 'Manicure', 'Pedicure', 'Massagista', 'Maquiador(a)', 'Esteticista', 'Depilador(a)']

export default class RegisterProfissional extends Component {
    constructor(){
        super();
        this.state = {
            name:'', lastName:'',
            email:'', phone:'',
            cpf:'', password:'',
            confirmPassword:'', profission: ''
        }

        this.realizarCadastro = this.realizarCadastro.bind(this);
        this.realizarCadastro = this.realizarCadastro.bind(this);
    }

    realizarCadastro(){
        if (this.validaDados()){
            let telefone = this.refs['phoneRef'].getCompletePhone();
            let user = new UserClass(this.state.name, this.state.cpf, [telefone], this.state.email, this.state.password, this.state.profission); //name='', cpf='', cellphonesArray=[], email='', pass=''
            let daoUser = new UserDAO();
            daoUser.saveUserOnFirebaseAuth(user);
        }
    }

    validaDados(){
        if(this.state.cpf.length < 11){
            alert('Preencha o CPF corretamente.')
            return false;
        }else if(this.state.password !== this.state.confirmPassword){
            alert('Senhas divergentes');
            return false;
        }else if(this.state.name.trim() ==''){
            alert('Informe um nome');
            return false;
        }
        return true;
    }

    render(){
        return( 
            <ImageBackground  style={styles.backgroundImg}>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <TextInput style={styles.input} placeholder="Nome" onChangeText={(name)=>this.setState({name})}/>
                            <TextInput style={styles.input} placeholder="Sobrenome" onChangeText={(lastName) => this.setState({lastName})}/>
                        </View>

                        <View>
                            <TextInput style={styles.input} placeholder="Email" textContentType="emailAddress" onChangeText={(texto)=>this.setState({email: texto})}/>
                        </View>

                        <View style={{height: 30}}>
                            <PhoneWithPrefixePicker ref={'phoneRef'}></PhoneWithPrefixePicker>
                        </View> 

                        <View>
                            <TextInput placeholder='Digite seu CPF' style={styles.input}
                                onChangeText={(cpf)=>this.setState({cpf})}
                            />
                        </View>

                        <View>
                            <TextInput placeholder="Crie um senha" style={styles.input} 
                                secureTextEntry={true} onChangeText={(password)=>this.setState({password})}
                            />
                            <TextInput placeholder="Confirme tua senha" style={styles.input} secureTextEntry={true}
                            onChangeText={(confirmPassword)=>this.setState({confirmPassword})}/>
                        </View>

                        <View>
                            <Picker 
                            selectedValue={this.state.profission}
                            onValueChange={(profission)=>this.setState({profission})}
                            >
                                {profissionsList.map((profission, index)=> <Picker.Item key={index} value={profission} label={profission} /> )}
                            </Picker>
                        </View>

                        <View>
                            <Button title="Cadastrar" onPress={this.realizarCadastro}/>
                                
                        </View>

                    </View>

                </ScrollView>
            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({

    input:{
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(0,0,0)',
        marginLeft: 10,
        marginVertical: 15,
        height: 40,
        /*placeholderTextColor: '#000',*/
        color: 'rgb(0,0,0)',
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },

    container:{
        padding: 15,
        width: screen.width,
        height: screen.height
    },
    backgroundImg:{
        opacity: 0.4,
        flex: 1,
        /*resizeMode: 'cover'*/
    }

});