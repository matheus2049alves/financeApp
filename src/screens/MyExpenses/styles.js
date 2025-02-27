import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
  width: 100%;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  text-align: center;
  font-family: 'Inter_700Bold';
  font-size: ${Math.min(24, screenWidth * 0.06)}px;
  font-weight: bold;
`;

export const LeftIconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const RightIconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ImageGraph = styled.Image`
  width: 90%;
  height: ${screenWidth * 0.6}px;
  margin: 10px 0 20px 0;
`;

export const Section = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 10px;
  padding: 0 5px;
`;

export const Text = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: ${Math.min(22, screenWidth * 0.055)}px;
  color: #4A5568;
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
`;