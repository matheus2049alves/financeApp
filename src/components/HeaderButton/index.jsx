import React from 'react';
import BlogIcon from '../../../assets/Blog.svg';
import { Container } from './styles';


export const HeaderButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <BlogIcon />
    </Container>
  );
};

