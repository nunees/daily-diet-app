import styled, { css } from "styled-components/native";

export type ModalStyleProps = {
  btnColor: "PRIMARY" | "SECONDARY";
  btnTextColor: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View`
  display: flex;
  width: 327px;
  height: 192px;
  margin-top: 20px;
  align-self: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View``;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MDL}px;
    text-align: center;
    padding-bottom: 25px;
  `};
`;
