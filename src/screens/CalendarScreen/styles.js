import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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

export const SelectedDateText = styled.Text`
  margin-top: ${hp('2%')}px;
  text-align: center;
  font-size: ${wp('4%')}px;
`;
