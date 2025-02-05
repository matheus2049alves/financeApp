import styled from 'styled-components/native';


export const Card = styled.View`
  width: 155px;
  height: 171px;
  border-radius: 20px;
  padding-left: 20px;

`

export const IcontWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: ${({ type }) => (type === 'Despesas' ? '#F86056' : '#40B5F0')};
`
export const ValueText = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 17px;
  color: #4A5568;
  margin-bottom: 8px;
`
export const TypeText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  color: '#4A5568';
`
