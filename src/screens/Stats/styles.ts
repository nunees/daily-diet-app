import styled, { css } from "styled-components/native";

type Props = {
  health: "GOOD" | "BAD";
};

export const Container = styled.View<Props>`
  ${({ theme, health }) => css`
    flex: 1;
    width: 100%;
    flex-direction: column;
    background-color: ${health === "GOOD"
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `}
`;

export const Header = styled.View`
  height: 138px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
