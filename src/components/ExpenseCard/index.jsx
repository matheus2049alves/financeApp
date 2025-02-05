import React from 'react';
import { View, Image } from 'react-native';

import {CardContainer, IconContainer, InfoContainer, Title, DateText, PriceText} from './styles';

export const ExpenseCard = ({ icon, title, date, price, iconBackgroundColor }) => {
  return (
    <CardContainer>
      <IconContainer  iconBackgroundColor={iconBackgroundColor}>
        <Image source={icon} style={{ width: 24, height: 24 }} resizeMode="contain" />
      </IconContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </InfoContainer>
      <PriceText>{price}</PriceText>
    </CardContainer>
  );
};
