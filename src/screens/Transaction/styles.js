import styled from 'styled-components/native';
import { TextInput } from 'react-native';

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

export const Input = styled(TextInput)`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 8px;
  padding: 10px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; /* Adiciona borda  */
`;

export const DateInputContainer = styled.View`
  width: 90%;
  margin-top: 12px; /* 12px abaixo do input de 'Preço' */
`;

export const DateInputLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 8px;
`;

export const DateInput = styled(TextInput)`
  flex: 1;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; /* Adiciona borda  */
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  background-color: ${({ theme, selected }) => selected ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  border: 1px solid ${({ theme, selected }) => selected ? theme.COLORS.PRIMARY : theme.COLORS.TITLE};
`;

export const ButtonText = styled.Text`
  color: ${({ theme, selected }) => selected ? theme.COLORS.PRIMARY : theme.COLORS.TITLE};
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const SelectBoxContainer = styled.View`
  width: 100%;
  height: 56px;
  justify-content: center;
  border-radius: 8px;
  padding: 0 20px;
  margin-top: 27px;
`;
export const SelectBoxView = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; 
`;

export const SelectBoxLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 18px;
  font-weight: bold;
`;
