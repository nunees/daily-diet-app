import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type StatsStyleProps = "GOOD" | "BAD";

type Props = {
  health: StatsStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 3;
  background-color: ${({ theme, health }) =>
    health === "GOOD" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 168px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  ${({ theme }) => css`
    background: ${theme.COLORS.WHITE};
  `}
`;
