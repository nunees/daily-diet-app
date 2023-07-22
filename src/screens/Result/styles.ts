import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 136px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREEN_DARK};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    padding-bottom: 46px;
  `};
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
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
