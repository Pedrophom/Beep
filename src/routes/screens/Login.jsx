import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de autenticação aqui
  };

  const handleSignUpPress = () => {
    navigation.navigate('Cadastro'); // Navegue para a tela de cadastro (SignUpScreen)
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.centerizedView}>
        <View style={styles.authBox}>
          <View style={styles.logoBox}>
            <Image
              source={require('../../../assets/BeepLogo.png')} // Adicione o caminho da sua imagem
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.loginTitleText}>Tela de Login</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.registerText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  centerizedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#096816a',
    borderRadius: 20,
    paddingHorizontal: 14,
  },
  logoBox: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius:75,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#e6e9ec',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#004aad',
    marginTop: 13,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default TelaLogin;
