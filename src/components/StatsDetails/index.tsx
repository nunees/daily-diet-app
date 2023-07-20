import {
  CardBoxLG,
  CardBoxSM,
  CardBoxSMContainer,
  Container,
  Description,
  Title,
  Value,
} from "./styles";

export function StatsDetails() {
  return (
    <Container>
      <Title>Estatísticas Gerais</Title>
      <CardBoxLG>
        <Value>0</Value>
        <Description>melhor sequência de pratos dentro da dieta</Description>
      </CardBoxLG>
      <CardBoxLG>
        <Value>0</Value>
        <Description>refeições registradas</Description>
      </CardBoxLG>
      <CardBoxSMContainer>
        <CardBoxSM color="GREEN">
          <Value>0</Value>
          <Description>refeições dentro da dieta</Description>
        </CardBoxSM>
        <CardBoxSM color="RED">
          <Value>0</Value>
          <Description>refeições fora da dieta</Description>
        </CardBoxSM>
      </CardBoxSMContainer>
    </Container>
  );
}
