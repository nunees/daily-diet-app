import styled, { css } from "styled-components/native";

export type BackHeaderProps = {
  color: "GREEN" | "RED";
};

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    flex-direction: column;
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `}
`;

export const Header = styled.View<BackHeaderProps>`
  ${({ theme, color }) => css`
    height: 100px;
    flex-direction: row;
    padding-top: 33px;
    background-color: ${color === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    padding-left: 84px;
    font-size: ${theme.FONT_SIZE.MDL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;
