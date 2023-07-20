import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const PercentCounter = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
