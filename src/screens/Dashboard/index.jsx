import React from 'react';
import { Container, Title,Header,LeftIconContainer } from './styles';
import {HeaderButton} from '../../components/HeaderButton';


export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <HeaderButton/>
        </LeftIconContainer>
        <Title>Dashboard</Title>
      </Header>
    </Container>
  );
};
