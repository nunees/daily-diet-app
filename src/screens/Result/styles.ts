import styled, { css } from "styled-components/native";

type TextColorProps = {
  color: "RED" | "GREEN";
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 136px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    padding-bottom: 46px;
  `};
`;

export const Illustration = styled.Image`
  align-self: center;
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-self: center;
    width: 191px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: ${theme.COLORS.GRAY_200};
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
