import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 168px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  ${({ theme }) => css`
    background: ${theme.COLORS.WHITE};
  `}
`;

export const BackArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
