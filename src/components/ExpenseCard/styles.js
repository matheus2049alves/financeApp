import styled from 'styled-components/native';

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #d9d9d9;

  width: 327px;
  height: 79px;
  
  margin: 0px 24px 10px 24px;
  
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color:${(props) => props.iconBackgroundColor || '#e6f7fc'};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #808080;
`;

export const PriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
