import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TITLE};
  text-align: center;
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const LeftIconContainer = styled.View`
  position: absolute;
  left: 20px;
  top: 25px;
  
`;
export const BalanceContent = styled.View`
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const BalanceCard = styled.View`
  width: 327px;
  height: 165px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};

`;

export const BalanceText = styled.Text`
  font-size: 15px;
  margin-bottom: 11px;
  color: white;
  font-weight: 200;
  font-family: 'Inter_400Regular';
`;

export const BalanceAmount = styled.Text`
  font-size: 29px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
  font-family: 'Inter_700Bold';
`;

export const BalanceDetails = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 5px;
  font-family: 'Inter_400Regular';
`;

export const MonthBudget = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const MonthBudgetText = styled.Text`
  font-family: Inter_700Bold;
  color: white;
  font-size: 13px;
  margin-bottom: 10px;
`
export const AvaliableMoneyText = styled.Text`
  font-size: 13px;
  color: white;
  font-family: 'Inter_400Regular';
`

export const MonthValue = styled.Text`
  font-size: 21px;
  color: white;
  font-family: 'Inter_700Bold';
  margin-right: 19px;
`

export const TextWrapper = styled.View`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom:20px;
  margin-left: 20px;
  padding-bottom: 2px;
`

export const ObjectiveTitle = styled.Text`

  font-size: 16px;
  margin-bottom: 7px;
  font-family: 'Inter_700Bold';
  color: ${({ theme }) => theme.COLORS.TITLE};
`
export const ObjectiveDescription = styled.Text`
  width: 188px;
  font-size: 13px;
  font-family: 'Inter_400Regular';
  color: "#A0AEC0"
`
export const PigIcon = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
`
