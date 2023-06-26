import { Text } from "react-native";
import { Container, Content, StatsStyleProps } from "./styles";

type Props = {
  health: StatsStyleProps;
};

export function Stats({ health }: Props) {
  return (
    <Container health={health}>
      <Content></Content>
    </Container>
  );
}
