import React, { useState, useCallback } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { 
  Container, Title, Header, LeftIconContainer, BalanceCard, BalanceText,
  BalanceAmount, BalanceDetails, BalanceContent, MonthBudgetText, MonthBudget,
  AvaliableMoneyText, TextWrapper, MonthValue, ObjectiveTitle, ObjectiveDescription,
  PigIcon, MoneyContainer, YouMoneyTitle, YouMoneyTitleWrapper
} from './styles';
import { HeaderButton } from '../../components/HeaderButton';
import { BlueCard } from '../../components/BlueCard';
import SaveMoney from '../../../assets/SaveMoney.svg';
import { YouMoneyCard } from '../../components/YouMoneyCard';
import { api } from '../../services/api';

// Função para formatação de moeda
const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).replace('R$', '') + ' R$';
};

// Função para obter o nome do mês atual
const getCurrentMonthName = () => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const currentMonth = new Date().getMonth();
  return months[currentMonth];
};

export const Dashboard = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    total_wallets_balance: 0,
    total_income: 0,
    total_expense: 0
  });

  // Substitui useEffect por useFocusEffect para atualizar quando a tela entra em foco
  useFocusEffect(
    useCallback(() => {
      console.log('Dashboard em foco - carregando dados...');
      fetchDashboardData();
      
      // Opcional: função de limpeza quando a tela perde o foco
      return () => {
        console.log('Dashboard saindo de foco');
      };
    }, [])
  );

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/transactions');
      
      console.log('Dados recebidos da API:', response.data);
      
      setData({
        total_wallets_balance: response.data.total_wallets_balance || 0,
        total_income: response.data.total_income || 0,
        total_expense: response.data.total_expense || 0
      });
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do dashboard');
    } finally {
      setLoading(false);
    }
  };

  function handleNavigateToMyExpenses() {
    navigation.navigate('MyExpenses');
  }

  return (
    <Container>
      {/* Resto do código permanece o mesmo */}
      <Header>
        <LeftIconContainer>
          <HeaderButton/>
        </LeftIconContainer>
        <Title>Dashboard</Title>
      </Header>
      
      {loading ? (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#3F57A7" />
      ) : (
        <>
          <BalanceCard>
            <BalanceContent>
              <BalanceText>Saldo Disponível</BalanceText>
              <BalanceAmount>{formatCurrency(data.total_wallets_balance)}</BalanceAmount>
              <BalanceDetails onPress={handleNavigateToMyExpenses}>Ver Extrato</BalanceDetails>
            </BalanceContent>
          </BalanceCard>
          
          <BlueCard width= {327} height={82} color='#3F57A7'>
            <MonthBudget>
              <TextWrapper>
                <MonthBudgetText>Orçamento para {getCurrentMonthName()}</MonthBudgetText>
                <AvaliableMoneyText>Dinheiro Disponível</AvaliableMoneyText>
              </TextWrapper>
              <MonthValue>{"500 R$"}</MonthValue>
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
            <YouMoneyCard 
              color='#A0C7F4' 
              type='Receitas' 
              value={formatCurrency(data.total_income)}
            />
            <YouMoneyCard 
              color='#EFC8C8' 
              type='Despesas' 
              value={formatCurrency(data.total_expense)}
            />
          </MoneyContainer>
        </>
      )}
    </Container>
  );
};