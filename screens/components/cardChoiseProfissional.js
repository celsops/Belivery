import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';



export default class cardChoiseProfissional extends Component{

    constructor(props){
        super(props);

        
    }


    render(){
        return(
            <View style={style.container}>
                <Image style={style.photo}/>
                <Text>{this.props.name}</Text>
            </View>);
    }
}


const style = new StyleSheet.create({

    photo:{
        width: 250, 
        height: 250
    },

    container:{
        padding: 15,
        flexDirection: 'row'
    }

});