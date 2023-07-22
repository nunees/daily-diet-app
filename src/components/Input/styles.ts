import styled, { css } from "styled-components/native";

type TextInputProps = {
  width?: string;
  height?: string;
};

export const Container = styled.View``;

export const TextInput = styled.TextInput<TextInputProps>`
  ${({ theme, width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    margin-top: 5px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_500};
    border-radius: 8px;
    padding-left: 10px;
  `};
`;
