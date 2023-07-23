import styled, { css } from "styled-components/native";

type StyleLightProps = {
  light?: "GREEN" | "RED" | "YELLOW";
  isModalToggled?: boolean;
};

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    align-self: center;
    flex-direction: column;
    background-color: ${theme.COLORS.GRAY_500};
  `}
`;

export const Header = styled.View`
  height: 15px;
  flex-direction: row;
  padding-top: 33px;
`;

export const Content = styled.View<StyleLightProps>`
  ${({ theme, isModalToggled }) => css`
    flex: 8;
    width: 100%;

    padding-left: 25px;
    padding-right: 25px;

    background-color: ${isModalToggled
      ? "rgba(0,0,0,0.2)"
      : theme.COLORS.WHITE};
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
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

export const Text = styled.Text`
  ${({ theme }) => css`
    padding-top: 5px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const StatusBox = styled.TouchableOpacity<StyleLightProps>`
  ${({ theme, light }) => css`
    width: 140px;
    height: 34px;
    margin-top: 15px;
    margin-right: 20px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  `};
`;

export const StatusLight = styled.View<StyleLightProps>`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  margin: 5px;
  background-color: ${({ theme, light }) =>
    light === "GREEN"
      ? theme.COLORS.GREEN_DARK
      : light === "RED"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.WHITE};
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
