import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Content = styled.View`
  flex: 8;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 45px;
  padding-left: 25px;
  padding-right: 25px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MDL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding-bottom: 15px;
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    padding-bottom: 15px;
    line-height: 20px;
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const DateAndTimeLabel = styled.Text`
  ${({ theme }) => css`
    padding-bottom: 5px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const DateAndTime = styled.Text`
  ${({ theme }) => css`
    padding-bottom: 5px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const StatusBox = styled.View``;
