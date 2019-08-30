import React, {Component} from 'react';
import {View, TextInput, Picker, StyleSheet} from 'react-native';


const prefixesJson = require('../../assets/country-code.json');

const prefixesCodes =  prefixesJson.countries;

export default class PhoneWithPrefixePicker extends Component{

  constructor(props){
    super(props); 
    this.state = {
      choosedPrefixe: '+55',
      cellphoneNumber: ''
    }
  }

  getCompletePhone(){
      return this.state.choosedPrefixe + this.state.cellphoneNumber;
  }

  formataLabelApresentacao(label){
    //Rever funcao...
    /*let valor = '';
    let tamanhoLabel = label.length;
    tamanhoLabel-=1
    for(tamanhoLabel; tamanhoLabel>=0; tamanhoLabel--){
      if(label[tamanhoLabel].isInteger()){
        break;
      }
    }

    valor = label.slice(0, tamanhoLabel);*/
    this.setState({choosedPrefixe: label})
  }

  render(){
    return(
      <View style={styles.container}>
            <Picker
                style = {styles.dimensionsPicker}
                selectedValue={this.state.choosedPrefixe}
                onValueChange={(prefixo)=>this.formataLabelApresentacao(prefixo)}
            >
                {prefixesCodes.map((country, index)=> <Picker.Item value={country.code}  label={country.code + ' ' + country.name} key={index}/> )}
            </Picker>

            <TextInput style={styles.input} onChangeText={(texto)=>this.setState({cellphoneNumber:texto})}
                placeholder="Digite seu telefone"
                value={this.state.cellphoneNumber}
            />
      </View>
    );
  }

}


const styles = StyleSheet.create({
    dimensionsPicker: {
        width: 100,
        height: 30
    },

    input:{
      marginHorizontal: 10,
      backgroundColor: '#fff',
      paddingHorizontal: 10
    },

    container:{
        flex:1, 
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row'
    }

});
