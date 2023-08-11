import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import db from '../dblocal';

var alerta = require("../assets/Alerta.png");
var seguro = require("../assets/Seguro.png");

export default class Pesquisa extends Component {
    constructor() {
        super();
        this.state= {
            comida: "",
            resultadotoxico: false,
            resultadoinfo: "",
        }
    }

    pesquisar = () => {
        this.setState({resultadotoxico: db[this.state.comida].toxico, resultadoinfo: db[this.state.comida].informacoes})

    }

    render() {
        const {comida} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.caixaPesquisa}>
                <TextInput placeholder={"Digite aqui..."} onChangeText={(text)=>{this.setState({comida: text})}} style={styles.textInput}/>
                <TouchableOpacity onPress={()=>{this.pesquisar(comida)}}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Image source={this.state.resultadotoxico ? alerta : seguro} style={styles.image}/>
                        <Text>{this.state.resultadoinfo}</Text>
                    </View>
                </View>
            </View>
          );
    }
}

    const styles= StyleSheet.create({
        container: {
            flex: 1
        },
        caixaPesquisa: {
          flex: 0.2,
          justifyContent: "center",
          flexDirection: "row",
        },
        textInput: {
          borderWidth: 2,
          width: "60%",
          height: 50,
          backgroundColor: "gray"
        },
        image: {
            width: 50,
            height: 50
        }
    })