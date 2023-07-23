import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

type QuickStatsStyleProps = {
  color: "GREEN" | "RED";
};

export const Container = styled(TouchableOpacity)`
  width: 327px;
  height: 102px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
`;

export const PercentDetails = styled.View<QuickStatsStyleProps>`
  ${({ theme, color }) => css`
    width: 100%;
    height: 102px;
    align-items: center;
    background-color: ${color === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
  `};
`;

export const PercentCounter = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const IconContainer = styled.View`
  flex-direction: column;
  flex-basis: 20px;
  align-self: flex-end;
`;

export const UpArrowIcon = styled(ArrowUpRight).attrs<QuickStatsStyleProps>(
  ({ theme, color }) => ({
    size: 24,
    color: color === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)`
  margin: 13px 13px 0 0;
`;
