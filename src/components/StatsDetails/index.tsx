import {
  CardBoxLG,
  CardBoxSM,
  CardBoxSMContainer,
  Container,
  Description,
  Title,
  Value,
} from "./styles";

type StatsDetailsProps = {
  totalMealsInDietSequence: number;
  totalMealsInDiet: number;
  totalMealsOutOfDiet: number;
  totalMeals: number;
};

export function StatsDetails({
  totalMealsInDietSequence,
  totalMealsInDiet,
  totalMealsOutOfDiet,
  totalMeals,
}: StatsDetailsProps) {
  return (
    <Container>
      <Title>Estatísticas Gerais</Title>
      <CardBoxLG>
        <Value>{totalMealsInDietSequence}</Value>
        <Description>melhor sequência de pratos dentro da dieta</Description>
      </CardBoxLG>
      <CardBoxLG>
        <Value>{totalMeals}</Value>
        <Description>refeições registradas</Description>
      </CardBoxLG>
      <CardBoxSMContainer>
        <CardBoxSM color="GREEN">
          <Value>{totalMealsInDiet}</Value>
          <Description>refeições dentro da dieta</Description>
        </CardBoxSM>
        <CardBoxSM color="RED">
          <Value>{totalMealsOutOfDiet}</Value>
          <Description>refeições fora da dieta</Description>
        </CardBoxSM>
      </CardBoxSMContainer>
    </Container>
  );
}
