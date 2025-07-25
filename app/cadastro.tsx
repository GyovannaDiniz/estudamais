import React, { useState } from 'react';
import { Image, TextInput, Text,  View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');


export default function cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.circulo}>
                 <Text style={styles.titulo}>Sign Up</Text>
            <View style={styles.campoComIcone}>
                <Image 
                    source={require('../assets/images/userNome.png')}
                    style={styles.iconeDentro}
                />
                <TextInput
                    style={styles.inputComIcone}
                    placeholder='Nome'//nomezinho escrito dentro do campo
                    value={nome}
                    onChangeText={setNome} //vai servir para atualizar o valor
                 
                />
            </View>

            <View style={styles.campoComIcone}>
                <Image 
                    source={require('../assets/images/e-mail.png')}
                    style={styles.iconeDentro}
                />
                <TextInput
                    style={styles.inputComIcone}
                    placeholder='Email'
                    value={email}
                    onChangeText={(setEmail)}
                />
            </View>

            <View style={styles.campoComIcone}>
                <Image
                    source={require('../assets/images/cadeado.png')}
                    style={styles.iconeDentro}
                />
                <TextInput
                    style={styles.inputComIcone}
                    placeholder='Senha'
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={(setSenha)}
                />              
            </View>
                <TouchableOpacity style={styles.botao} onPress={() => console.log('clicado')}>
                    <Text style={styles.texto}>Sing Up</Text>
                </TouchableOpacity>
            <View style={styles.linhaComTexto}>
                <View style={styles.linha}/>
                <Text style={styles.ou}>OU</Text>
                <View style={styles.linha}/>
            </View>
            <View>
            <TouchableOpacity style={styles.botao} onPress={() => console.log('clicado')}>
                <Text style={styles.texto}>Google</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                   // usa toda altura da tela
        justifyContent: 'center',  // centraliza verticalmente
        alignItems: 'center',      // centraliza horizontalmente
        backgroundColor: '#fff',
        padding: width * 0.20,
    },

    circulo: {
        width: width * 0.99,
        height: height * 0.99,
        backgroundColor: '#FEADA6',
        borderRadius: (width * 0.99) / 2,
        marginTop: height * 0.40,
        padding: width * 0.20,
    },

    titulo: {
        textAlign:'center', 
        fontSize: width * 0.06,
        marginBottom: height * 0.02, //espaço abaixo de cada campo
        
    },

    input: {
        height: height * 0.06,
        borderColor: '#C1C1C1',
        backgroundColor: '#F7FAFB',
        borderWidth: width * 0.001, // espessura da borda
        marginBottom:height * 0.03,
        paddingHorizontal: width * 0.1, //espaço interno dos lados(na horizontal)
        borderRadius: width * 0.10,
    },
    
    botao: {
        backgroundColor:'#FAD0C4',
        padding: 10,
        borderRadius:  height * 0.5,
        borderWidth: width * 0.001,
        borderColor:'#C1C1C1',
        marginHorizontal: width * 0.05,
        alignItems: 'center',
        width: width * 0.50,
    },

    texto: {
        color:'#000',
        fontSize: 16,
        fontWeight:'bold',
    },

    linhaComTexto: {
        alignItems: 'center', 
        flexDirection: 'row',  // coloca os itens em linha (horizontal)
        marginVertical: height * 0.02, //// espacinho acima e abaixo da linha com "OU"
        marginHorizontal: width * 0.06,
    },

      linha: {
      height: height * 0.002,
      width: width * 0.2,
      backgroundColor: '#000',
      marginVertical: height * 0.02,
      
    },

    ou: {
        marginHorizontal: width * 0.02,
        fontSize: 14,
        color: '#000',
    },

    campoComIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7FAFB',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: width * 0.1,
        height: height * 0.06,
        paddingHorizontal: width * 0.04,
        marginBottom: height * 0.03,
        
    },
    

    iconeDentro: {
        width: width * 0.07,
        height:  height * 0.04,
        marginRight: 10,
    },

     inputComIcone: {
        flex: 1,
        fontSize: 16,
    },
})

