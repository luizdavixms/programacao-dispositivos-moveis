import React from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Nome"
        style={styles.input}
      />

      <TextInput 
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput 
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
      />

      <TextInput 
        placeholder="Confirme a Senha"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
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
  link: {
    textAlign: 'center',
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
