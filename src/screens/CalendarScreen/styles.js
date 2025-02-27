import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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

export const SelectedDateText = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
`;
