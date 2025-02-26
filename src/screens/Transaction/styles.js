import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-items: center;
`;

export const Header = styled.View` 
  height: 153px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  position: absolute;
  bottom: 27px;  
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 8px;
  padding: 10px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; /* Adiciona borda  */
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 27px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const SelectBoxContainer = styled.View`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  margin-top: 27px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; 
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 230px;
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 18px;
  font-weight: bold;
`;
