import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
  align-self: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;
