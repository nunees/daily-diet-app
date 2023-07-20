import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: column;
  flex-basis: 20px;
  align-self: flex-start;
  margin-left: 24px;
`;

export const BackArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
