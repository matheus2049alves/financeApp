import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
  height: 100%;

`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 88px;
  align-items: center;

  padding: 20px 0;
  margin: 32px 20px 0px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  text-align: center;

  font-family: 'Inter_700Bold';
  font-size: 24px;
  font-weight: bold;
`;

export const LeftIconContainer = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2.857px 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
`;

export const RightIconContainer = styled.View`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  
`;

export const ImageGraph = styled.Image`
 
  height: 250px;
  width: 350px;
  
  margin-top: 0;
  margin-bottom: 30px;
`;

export const Section = styled.View`
  height: 260px;
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 24px;
  
  color: #4A5568;

  margin-left: 24px;
  margin-bottom: 10px;
  left: 0;
  top: 0;

`;
