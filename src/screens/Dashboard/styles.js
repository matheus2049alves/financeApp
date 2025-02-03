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
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
