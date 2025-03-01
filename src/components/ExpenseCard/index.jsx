import React from 'react';
import { CardContainer, IconContainer, InfoContainer, Title, DateText, PriceText } from './styles';

export const ExpenseCard = ({ icon, title, date, price, iconBackgroundColor }) => {
  return (
    <CardContainer>
      <IconContainer style={{ backgroundColor: iconBackgroundColor }}>
        {icon}
      </IconContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </InfoContainer>
      <PriceText>{price}</PriceText>
    </CardContainer>
  );
};