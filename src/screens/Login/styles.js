import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#4A90E2', '#50A7C2'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  border-radius: 10px;
  width: 343px;
  height: 581px;
  background-color: white;
  padding: 20px;
`;

export const LoginText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #3F57A7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const SignupText = styled.Text`
  color: #3F57A7;
  font-size: 14px;
  margin-bottom: 24;
`;

export const SignupLink = styled.Text`
  color: #3F57A7;
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Divider = styled.View`
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

export const DividerText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 14px;
  font-weight: regular;
`;