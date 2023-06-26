import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 33px;
`;

export const Title = styled.Text`
  padding-left: 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
