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

