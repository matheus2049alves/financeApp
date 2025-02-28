import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, Content, LoginText, Input, 
  Button, ButtonText, SignUpText, LoginLink } from './styles';
import {api} from '../../services/api';

export const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {

    if (!name || !email || !password) {
      Alert.alert('Preencha todos os campos para continuar!');
      return;
    }

    api.post('/users', { name, email, password })
      .then(() => {
        Alert.alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        if (error.response){
          Alert.alert(error.response.data.message);
        } else {
          Alert.alert('Erro ao cadastrar usuário!');
        }

      });
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Content>
        <SignUpText>Criar Conta</SignUpText>
        <LoginText>
          Já possui uma conta? <LoginLink onPress={navigateToLogin}>Login</LoginLink>
        </LoginText>

        <Input 
        placeholder="Nome Completo" 
        keyboardType="full-name"
        onChangeText={text => setName(text)} />

        <Input 
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)} />

        <Input 
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)} />

        <Button onPress={handleRegister}>
          <ButtonText>Registrar</ButtonText>
        </Button>

      </Content>
    </Container>
  );
};
