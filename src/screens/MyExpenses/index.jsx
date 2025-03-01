import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { Container, Header, Title, LeftIconContainer, RightIconContainer, ImageGraph, Section, Text } from "./styles";
import { BudgetCard } from "../../components/BudgetCard";
import { ExpenseCard } from "../../components/ExpenseCard";
import { api } from "../../services/api";

import ArrowDown from '../../../assets/arrow-down.svg'
import MoreHorizontal from '../../../assets/more-horizontal.svg'
import TrendingUp from '../../../assets/trending-up.svg'
import TrendingDown from '../../../assets/trending-down.svg'

// tradução das categorias
const categoryLabels = {
  // Expense categories
  food: "Alimentação",
  health: "Saúde",
  transport: "Transporte",
  education: "Educação",
  entertainment: "Entretenimento",
  shopping: "Compras",
  others: "Outros",
  
  // Income categories
  salary: "Salário",
  freelance: "Freelance",
  investments: "Investimentos",
  business: "Negócios",
  other_income: "Outros Rendimentos"
};

// Função para formatar data de "DD/MM/YYYY" para "DD MMM YYYY"
const formatDate = (dateString) => {
  const parts = dateString.split('/');
  if (parts.length !== 3) return dateString;
  
  const day = parts[0];
  const monthIndex = parseInt(parts[1]) - 1;
  const year = parts[2];
  
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  return `${day} ${months[monthIndex]} ${year}`;
};

export const MyExpenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  // Carregar transações quando a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
      fetchTransactions();
    }, [])
  );

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await api.get('/transactions');
      
      setTransactions(response.data.transactions || []);
      setTotalIncome(response.data.total_income || 0);
      setTotalExpense(response.data.total_expense || 0);
      
      console.log('Transações carregadas:', response.data.transactions.length);
    } catch (error) {
      console.error('Erro ao carregar transações:', error);
    } finally {
      setLoading(false);
    }
  };

  // Formatar valor para exibição 
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' R$';
  };

  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <ArrowDown />
        </LeftIconContainer>
        <Title>Extrato</Title>
        <RightIconContainer>
          <MoreHorizontal />
        </RightIconContainer>
      </Header>

      <ImageGraph source={require('../../../assets/graph.png')} resizeMode='contain'/>

      <BudgetCard 
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />

      <Section>
        <Text>Suas Transações</Text>
        
        {loading ? (
          <ActivityIndicator size="large" color="#4E61B6" style={{ marginTop: 20 }} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {transactions.length === 0 ? (
              <View style={{ padding: 20, alignItems: 'center' }}>
                <Text style={{ color: '#666' }}>Nenhuma transação encontrada</Text>
              </View>
            ) : (
              transactions.map(transaction => (
                <ExpenseCard
                  key={transaction.id.toString()}
                  icon={transaction.type === 'expense' 
                    ? <TrendingDown width={24} height={24}/> 
                    : <TrendingUp width={24} height={24}/>
                  }
                  title={categoryLabels[transaction.category] || transaction.category}
                  date={formatDate(transaction.transaction_date)}
                  price={formatCurrency(transaction.value)}
                  iconBackgroundColor={transaction.type === 'expense' ? '#EFC8C8' : '#A0C7F4'}
                />
              ))
            )}
          </ScrollView>
        )}
      </Section>
    </Container>
  );
}