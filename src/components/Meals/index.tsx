import { Container, Title } from "./styles";
import { Button } from "@components/Button";
import { DayList } from "@components/DayList";
import { DateTitle } from "@components/DateTitle";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Button />
      <DayList />
    </Container>
  );
}
