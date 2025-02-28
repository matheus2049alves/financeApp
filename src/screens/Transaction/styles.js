import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${hp('2%')}px; 
`;

export const Header = styled.View` 
  height: ${hp('20%')}px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Title = styled.Text`
  font-size: ${wp('6%')}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  position: absolute;
  bottom: ${hp('3%')}px;
`;

export const Input = styled(TextInput)`
  width: 90%;
  height: ${hp('7%')}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 8px;
  padding: ${hp('1%')}px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; /* Adiciona borda  */
`;

export const DateInputContainer = styled.View`
  width: 90%;
  margin-top: ${hp('0.5%')}px; /* Adjusted margin-top for consistency with other elements */
`;

export const DateInputLabel = styled.Text`
  font-size: ${wp('4%')}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: ${hp('1%')}px;
`;

export const DateInput = styled(TextInput)`
  flex: 1;
  height: ${hp('7%')}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 8px;
  padding: ${hp('1%')}px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; /* Adiciona borda  */
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  height: ${hp('7%')}px;
  background-color: ${({ theme, selected }) => selected ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 ${wp('1%')}px;
  border: 1px solid ${({ theme, selected }) => selected ? theme.COLORS.PRIMARY : theme.COLORS.TITLE};
`;

export const ButtonText = styled.Text`
  color: ${({ theme, selected }) => selected ? theme.COLORS.PRIMARY : theme.COLORS.TITLE};
  font-size: ${wp('4.5%')}px;
  font-weight: bold;
  margin-left: ${wp('2%')}px;
`;

export const SelectBoxContainer = styled.View`
  width: 100%;
  height: ${hp('7%')}px;
  justify-content: center;
  border-radius: 8px;
  padding: 0 ${wp('5%')}px;
  margin-top: ${hp('1.5%')}px; /* Adjusted margin-top for consistency with other elements */
`;

export const SelectBoxView = styled.View`
  width: 100%;
  height: ${hp('7%')}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  border-radius: 8px;
  padding: ${hp('1%')}px;
  border: 1px solid ${({ theme }) => theme.COLORS.TITLE}; 
`;

export const SelectBoxLabel = styled.Text`
  font-size: ${wp('4%')}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: ${hp('1%')}px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: ${hp('7%')}px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp('2%')}px;
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${wp('4.5%')}px;
  font-weight: bold;
`;
