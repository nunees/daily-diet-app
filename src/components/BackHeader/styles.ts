import styled, { css } from "styled-components/native";

export type BackHeaderProps = {
  color: "GREEN" | "RED" | "GREY";
  isToggledModal?: boolean;
};

export const Container = styled.View<BackHeaderProps>`
  ${({ theme, isToggledModal }) => css`
    flex: 0.9;
    width: 100%;
    flex-direction: column;
  `}
`;

// background-color: ${isToggledModal
//   ? "rgba(0,0,0,0.2)"
//   : theme.COLORS.GREEN_LIGHT};

export const Header = styled.View<BackHeaderProps>`
  ${({ theme, color }) => css`
    height: 100px;
    flex-direction: row;
    padding-top: 33px;
    background-color: ${color === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : color === "RED"
      ? theme.COLORS.RED_LIGHT
      : color === "GREY"
      ? theme.COLORS.GRAY_500
      : "transparent"};
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
