import React from "react";
import {Card, Content, Title, Amount, BarBudget, BarBudgetInternal} from './styles';

export const BudgetCard = () => {
  return (
    <Card>
      <Content>
        <Title>Saldo Disponível</Title>
        <Amount>R$ 1.000,00</Amount>
      </Content>
      <BarBudget></BarBudget>
    </Card>
  );
};
