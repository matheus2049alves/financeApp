import React from 'react';
import { 
  Container, Title,Header,LeftIconContainer,BalanceCard,BalanceText,
  BalanceAmount,BalanceDetails,BalanceContent 
} from './styles';
import {HeaderButton} from '../../components/HeaderButton';
import { Text } from 'react-native';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <HeaderButton/>
        </LeftIconContainer>
        <Title>Dashboard</Title>
      </Header>
      <BalanceCard>
        <BalanceContent>
          <BalanceText>Saldo Disponível</BalanceText>
          <BalanceAmount>1.000 R$</BalanceAmount>
          <BalanceDetails>Ver Extrato</BalanceDetails>
        </BalanceContent>
      </BalanceCard>
    </Container>
  );
};
