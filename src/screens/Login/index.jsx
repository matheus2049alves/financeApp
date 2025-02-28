import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Container, Content, LoginText, Input, 
  Button, ButtonText, SignupText, SignupLink, Divider,DividerText } from './styles';
import { SocialButton } from '../../components/SocialButton';
import { useAuth } from '../../hooks/auth';


export const Login = () => {

  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = () => {
    signIn({email, password});
  };


  return (
    <Container>
      <Content>
        <LoginText>Login</LoginText>
        <SignupText>
          Ainda sem conta? <SignupLink onPress={handleSignUpPress}>Criar Conta</SignupLink>
        </SignupText>

        <Input 
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <Input 
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
         
        <Button onPress={handleLoginPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Divider>
          <DividerText>Ou</DividerText>
        </Divider>
        <SocialButton text="Entrar com Google" />
        <SocialButton text="Entrar com Facebook" />
      </Content>
    </Container>
  );
};