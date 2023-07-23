import { Container, PercentCounter, PercentText } from "./styles";

type Props = {
  percent: number;
};

export function Highlight({ percent }: Props) {
  return (
    <Container>
      <PercentCounter>
        {percent.toFixed(2).replace(".", ",") + "%"}
      </PercentCounter>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
