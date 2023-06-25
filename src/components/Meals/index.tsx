import { Container, Title } from "./styles";
import { Button } from "@components/Button";
import { DayList } from "@components/DayList";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Button></Button>
      <DayList />
    </Container>
  );
}
