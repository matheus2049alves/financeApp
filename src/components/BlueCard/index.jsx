import React from 'react';
import { Card, Content } from './styles';

export const BlueCard = ({ width, height,color, children }) => {
  return (
    <Card style={{ width, height,backgroundColor:color }}>
      <Content>
        {children}
      </Content>
    </Card>
  );
};