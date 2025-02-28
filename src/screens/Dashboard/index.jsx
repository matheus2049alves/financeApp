import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Container, Title,Header,LeftIconContainer,BalanceCard,BalanceText,
  BalanceAmount,BalanceDetails,BalanceContent, MonthBudgetText,MonthBudget,
   AvaliableMoneyText, TextWrapper, MonthValue, ObjectiveTitle, ObjectiveDescription,
   PigIcon, MoneyContainer, YouMoneyTitle, YouMoneyTitleWrapper
} from './styles';
import {HeaderButton} from '../../components/HeaderButton';
import { BlueCard } from '../../components/BlueCard';
import SaveMoney from '../../../assets/SaveMoney.svg';
import {YouMoneyCard} from '../../components/YouMoneyCard';


export const Dashboard = () => {
  const navigation = useNavigation();

  function handleNavigateToMyExpenses() {
    navigation.navigate('MyExpenses');
  }
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
          <BalanceDetails onPress={handleNavigateToMyExpenses}>Ver Extrato</BalanceDetails>
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
      <YouMoneyTitleWrapper>
        <YouMoneyTitle>Seu Dinheiro</YouMoneyTitle>
      </YouMoneyTitleWrapper>
      <MoneyContainer>
        <YouMoneyCard color='#A0C7F4' type='Receitas' value='1.500 R$'/>
        <YouMoneyCard color='#EFC8C8' type='Despesas' value='500 R$'/>
      </MoneyContainer>
      
    </Container>
  );
};
