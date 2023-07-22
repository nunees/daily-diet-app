import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    padding-top: 25px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;
