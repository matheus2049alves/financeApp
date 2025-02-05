import React from 'react';
import { Card,TypeText,IcontWrapper,
   ValueText,Container } from './styles';

import Expansive from '../../../assets/Expansive.svg';
import Income from '../../../assets/Income.svg';

export const YouMoneyCard = ({ color, type, value, }) => {
  const icon = type === 'Despesas' ? <Expansive /> : <Income />;
  
  return (
    <Card style={{ backgroundColor: color }}>
        <IcontWrapper type = {type}>
          {icon}
        </IcontWrapper>
        <ValueText>{value}</ValueText>
        <TypeText>{type}</TypeText>
    </Card>
  );
};