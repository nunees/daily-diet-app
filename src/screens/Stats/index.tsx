import { Text } from "react-native";
import { Container, Content, Header } from "./styles";
import { StatsHeader } from "@components/StatsHeader";
import { Highlight } from "@components/Highlight";
import { BackButton } from "@components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatsDetails } from "@components/StatsDetails";

type RouteParams = {
  percent: number;
  totalMealsInDietSequence: number;
  totalMealsInDiet: number;
  totalMealsOutOfDiet: number;
  totalMeals: number;
};

export function Stats() {
  const routes = useRoute();
  const navigation = useNavigation();
  const {
    percent,
    totalMeals,
    totalMealsInDiet,
    totalMealsInDietSequence,
    totalMealsOutOfDiet,
  } = routes.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container health={Number(percent) < 50 ? "BAD" : "GOOD"}>
      <Header>
        <BackButton />
        <Highlight percent={percent} />
      </Header>
      <Content>
        <StatsDetails
          totalMeals={totalMeals}
          totalMealsInDiet={totalMealsInDiet}
          totalMealsInDietSequence={totalMealsInDietSequence}
          totalMealsOutOfDiet={totalMealsOutOfDiet}
        />
      </Content>
    </Container>
  );
}
