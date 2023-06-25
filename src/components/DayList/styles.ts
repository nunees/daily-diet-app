import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 33px;
  justify-content: flex-start;
`;

export const DateTitle = styled.Text`
  padding-left: 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Card = styled.View`
  width: 100%;
  height: 49px;
  margin-top: 13px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
`;

export const CardHour = styled.Text`
  margin-left: 13px;
  margin-right: 13px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  margin-right: 13px;
  width: 0px;
  height: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_400};
  `}
`;

export const CardDescription = styled.Text`
  flex-grow: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CardStatus = styled.View`
  margin-right: 13px;
  border-radius: 15px;
  width: 14px;
  height: 14px;

  ${({ theme }) => css`
    background: ${theme.COLORS.RED_LIGHT};
  `}
`;
