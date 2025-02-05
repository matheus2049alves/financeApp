import React from 'react';
import { ButtonContainer, ButtonText, IconContainer } from './styles';
import GoogleIcon from '../../../assets/GoogleIcon.svg';
import FacebookIcon from '../../../assets/FacebookIcon.svg';

export const SocialButton = ({ text }) => {
  const renderIcon = () => {
    if (text.includes('Google')) {
      return <GoogleIcon width={24} height={24} />;
    } else if (text.includes('Facebook')) {
      return <FacebookIcon width={24} height={24} />;
    }
    return null;
  };

  return (
    <ButtonContainer>
      <IconContainer>{renderIcon()}</IconContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

