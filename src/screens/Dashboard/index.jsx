import React from 'react';
import { 
  Container, Title,Header,LeftIconContainer,BalanceCard,BalanceText,
  BalanceAmount,BalanceDetails,BalanceContent, MonthBudgetText,MonthBudget,
   AvaliableMoneyText, TextWrapper, MonthValue, ObjectiveTitle, ObjectiveDescription,
   PigIcon
} from './styles';
import {HeaderButton} from '../../components/HeaderButton';
import { BlueCard } from '../../components/BlueCard';
import SaveMoney from '../../../assets/SaveMoney.svg';


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
      <BlueCard width= {327} height={82} color='#3F57A7'>
        <MonthBudget>
          <TextWrapper>
            <MonthBudgetText>Orçamento para Dezembro</MonthBudgetText>
            <AvaliableMoneyText>Dinheiro Disponível</AvaliableMoneyText>
          </TextWrapper>
          <MonthValue>1.000 R$</MonthValue>
        </MonthBudget>
      </BlueCard>
      <BlueCard width={327} height={110} color='white'>
        <MonthBudget>
          <TextWrapper>
            <ObjectiveTitle>Criar Objetivo</ObjectiveTitle>
            <ObjectiveDescription>Defina uma meta para economizar seu dinheiro.</ObjectiveDescription>
          </TextWrapper>
          <PigIcon>
            <SaveMoney/>
          </PigIcon>
        </MonthBudget>
      </BlueCard>
      
    </Container>
  );
};
