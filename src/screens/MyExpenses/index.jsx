import React from "react";

import { Container, Header, Title, LeftIconContainer, RightIconContainer, ImageGraph, Section, Text } from "./styles";
import { BudgetCard } from "../../components/BudgetCard";
import { ExpenseCard } from "../../components/ExpenseCard";

import ArrowDown from '../../../assets/arrow-down.svg'
import MoreHorizontal from '../../../assets/more-horizontal.svg'

export const MyExpenses = () => {
  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <ArrowDown />
        </LeftIconContainer>
        <Title>Meus Gastos</Title>
        <RightIconContainer>
          <MoreHorizontal />
        </RightIconContainer>
      </Header>

      <ImageGraph source={require('../../../assets/graph.png') } risezeMode='contain'/>

      <BudgetCard />

      <Section>
        <Text>Seus Gastos</Text>
        
      </Section>

      <ExpenseCard
          icon={require('../../../assets/home-icon.png')} // Substitua pelo caminho do ícone
          title="Moradia"
          date="2 Dez 2024"
          price="500 R$"
        />
      <ExpenseCard
          icon={require('../../../assets/food-icon.png')} // Substitua pelo caminho do ícone
          title="Moradia"
          date="2 Dez 2024"
          price="500 R$"
          iconBackgroundColor={'#BFC0A0'}
        />
      <ExpenseCard
          icon={require('../../../assets/car-icon.png')} // Substitua pelo caminho do ícone
          title="Carro"
          date="2 Dez 2024"
          price="500 R$"
          iconBackgroundColor={'#ECD4CE'}
        />
    </Container>
  );
}
