import styled, { css } from "styled-components/native";

type Props = {
  color: "RED" | "GREEN";
};

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    padding-top: 33px;
    padding-bottom: 33px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const CardBoxLG = styled.View`
  ${({ theme }) => css`
    padding: 16px;
    justify-content: center;

    margin-top: 16px;
    width: 327px;
    height: 87px;
    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 8px;
  `};
`;

export const CardBoxSMContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 327px;
  height: 107px;
`;

export const CardBoxSM = styled.View<Props>`
  ${({ theme, color }) => css`
    padding: 16px;
    align-items: center;
    text-justify: center;
    width: 157px;
    height: 107px;
    background-color: ${color === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;
  `};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MDL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
