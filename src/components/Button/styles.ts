import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ButtonProps = {
  btnColor: "BLACK" | "WHITE";
  btnWidth?: number;
  btnHeight?: number;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, btnColor, btnHeight, btnWidth }) => css`
    align-self: center;
    flex-direction: row;
    width: ${btnWidth || 100}px;
    height: ${btnHeight || 100}px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    border: ${btnColor === "WHITE" ? theme.COLORS.GRAY_200 : "none"};
    background: ${btnColor === "BLACK"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE};
  `}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, btnColor }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${btnColor === "BLACK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`;

export const IconPlus = styled(Plus).attrs<ButtonProps>(
  ({ theme, btnColor }) => ({
    size: 18,
    color: btnColor === "WHITE" ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE,
  })
)`
  margin-right: 10px;
`;

export const IconPen = styled(PencilSimpleLine).attrs<ButtonProps>(
  ({ theme, btnColor }) => ({
    size: 18,
    color: btnColor === "WHITE" ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE,
  })
)`
  margin-right: 10px;
`;

export const IconTrash = styled(Trash).attrs<ButtonProps>(
  ({ theme, btnColor }) => ({
    size: 18,
    color: btnColor === "WHITE" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)`
  margin-right: 10px;
`;
