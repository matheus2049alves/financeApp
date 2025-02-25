import React from 'react';
import { Container, Content, LoginText, Input, 
  Button, ButtonText, SignUpText, LoginLink } from './styles';

export const SignUp = () => {
  return (
    <Container>
      <Content>
        <SignUpText>Criar Conta</SignUpText>
        <LoginText>
          Já possui uma conta? <LoginLink>Login</LoginLink>
        </LoginText>
        <Input placeholder="Nome Completo" keyboardType="full-name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />
        <Button>
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};
