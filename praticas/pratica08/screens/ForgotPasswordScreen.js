import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  

function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const navigation = useNavigation();  

  const validarEmail = () => {
    if (!email) {
      setErro("E-mail é obrigatório.");
    } else if (!email.includes('@')) {
      setErro("E-mail inválido.");
    } else {
      setErro("");
      alert("Instruções enviadas para o e-mail!");
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');  
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="E-mail"
        style={[styles.input, erro ? styles.errorInput : null]}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {erro && <Text style={styles.errorText}>{erro}</Text>}

      <TouchableOpacity style={styles.button} onPress={validarEmail}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Link para voltar para o login */}
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.link}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: '#FF0000',  
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
