import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 15px;
`;