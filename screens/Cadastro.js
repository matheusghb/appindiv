import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen ({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [lo, setLo] = useState('');
  const [ba, setBa] = useState('');
  const [mu, setMu] = useState('');
  const [es, setEs] = useState('');

  const handleCadastro = async () => {
    const userData = {
      email,
      senha,
      nome,
      cep,
      lo,
      ba,
      mu,
      es,
    };
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    navigation.navigate('Login')
  }

    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <Image
           source={{ uri: 'https://cdn-icons-png.flaticon.com/512/711/711769.png'}}
           style={styles.logo}
           />
          <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder='E-mail:'
            placeholderTextColor={'#003f5c'}
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.inputText}
            placeholder='Senha:'
            placeholderTextColor={'#003f5c'}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
            />
          </View>
          <View style={styles.inputView}>

            <TextInput style={styles.inputText}
            placeholder='Nome:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput style={styles.inputText}
            placeholder='CEP:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={cep}
            onChangeText={setCep}
            />
            <TextInput style={styles.inputText}
            placeholder='Logradouro:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={logradouro}
            onChangeText={setLogradouro}
            />
            <TextInput style={styles.inputText}
            placeholder='Bairro:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={bairro}
            onChangeText={setBairro}
            />
            <TextInput style={styles.inputText}
            placeholder='Município:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={municipio}
            onChangeText={setMunicipio}
            />
            <TextInput style={styles.inputText}
            placeholder='Estado:'
            placeholderTextColor={'#a67872'}
            secureTextEntry={true}
            value={estado}
            onChangeText={setEstado}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn1} onPress={handleCadastro}>
            <Text style={styles.loginText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 25,
      height:  50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
      flexDirection:  'row',
      alignItems: 'center',
      borderColor: 'black',
    },
    inputText: {
      height: 50,
      color: 'black',
      flex: 1,
      borderColor: 'black',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: 'black',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText : {
      color: 'white',
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      backgroundColor: '#f5f5dc',
    },
    loginBtn1: {
      width: '80%',
      backgroundColor: 'gray',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
  }); 