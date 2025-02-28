import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, LoginText, Input, 
  Button, ButtonText, SignupText, SignupLink, Divider,DividerText } from './styles';
import { SocialButton } from '../../components/SocialButton';
export const Login = () => {

  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Content>
        <LoginText>Login</LoginText>
        <SignupText>
          Ainda sem conta? <SignupLink onPress={handleSignUpPress}>Criar Conta</SignupLink>
        </SignupText>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />
        <Button>
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