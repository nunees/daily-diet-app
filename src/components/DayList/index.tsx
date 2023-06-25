import {
  Card,
  CardDescription,
  CardHour,
  CardStatus,
  Container,
  DateTitle,
  Divider,
} from "./styles";

export function DayList() {
  return (
    <Container>
      <DateTitle>12.08.22</DateTitle>
      <Card>
        <CardHour>20:00</CardHour>
        <Divider />
        <CardDescription>X-Tudo</CardDescription>
        <CardStatus />
      </Card>

      <Card>
        <CardHour>20:00</CardHour>
        <Divider />
        <CardDescription>Whey protein com leite</CardDescription>
        <CardStatus />
      </Card>

      <Card>
        <CardHour>20:00</CardHour>
        <Divider />
        <CardDescription>Salada de Frutas</CardDescription>
        <CardStatus />
      </Card>
    </Container>
  );
}
