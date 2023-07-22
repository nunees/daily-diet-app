import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 33px;
  margin-right: 25px;
  margin-left: 25px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    padding-bottom: 10px;
    padding-left: 10px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
