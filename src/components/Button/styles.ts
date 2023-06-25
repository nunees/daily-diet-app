import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  min-width: 327px;
  min-height: 50px;

  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_200};
  `}

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 10px;
`;
