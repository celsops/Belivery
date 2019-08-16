import React, { Component } from 'react';
import { View, Dimensions, TextInput, Picker, StyleSheet, ImageBackground } from 'react-native';

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
    }

    render(){
        return( 
            <ImageBackground  style={styles.backgroundImg}>
                <View style={styles.container}>
                    <View>
                        <TextInput style={styles.input} placeholder="Nome"/>
                        <TextInput style={styles.input} placeholder="Sobrenome"/>
                    </View>

                    <View>
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>

                    <View style={{height: 30}}>
                        <PhoneWithPrefixePicker></PhoneWithPrefixePicker>
                    </View> 

                    <View>
                        <TextInput placeholder='Digite seu CPF' style={styles.input}/>
                    </View>

                    <View>
                        <TextInput placeholder="Crie um senha" style={styles.input} />
                        <TextInput placeholder="Confirme tua senha" style={styles.input} />
                    </View>

                    <View>
                        <Picker 
                        selectedValue={this.state.profission}
                        onValueChange={(profission)=>this.setState({profission})}
                        >
                            {profissionsList.map((profission, index)=> <Picker.Item key={index} value={profission} label={profission} /> )}
                        </Picker>
                    </View>

                </View>
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