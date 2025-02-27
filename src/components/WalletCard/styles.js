
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const WalletName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TITLE}
`;

export const WalletBalance = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const ButtonText = styled.Text`
  color: #007bff;
`;


