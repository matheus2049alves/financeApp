import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};

  border-radius: 20px;
  padding: 20px;
  width: 327px;
  height: 104px;
  
  box-sizing: border-box;

  margin: 24px 24px 16px 24px;
`;

export const Title = styled.Text`
 color: white;

 font-size: 13px;
 font-family: 'Inter_400Regular';
 font-style: normal;
`;

export const Amount = styled.Text`
  color: white;

  font-size: 24px;
  font-family: 'Inter_700Bold';
  font-weight: bold;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BarBudget = styled.View`
  width: 287px;
  height: 6px;
  margin-top: 14px;
  
  border-radius: 70px;
  background:  #A0AEC0;

`;

