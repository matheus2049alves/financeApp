
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 40px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Inter_700Bold';
  color: ${({ theme }) => theme.COLORS.TITLE}
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #007bff;
  border-radius: 50px;
  padding: 12px 24px;
  align-self: center;
  margin-top: 16px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.View`
  width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 4px;
`;

export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ModalButton = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const ModalButtonText = styled.Text`
  font-size: 16px;
  color: #007bff;
`;
