import { Container } from "./styles";
import { Header } from "@components/Header";
import { QuickStats } from "@components/QuickStats";
import { Meals } from "@components/Meals";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleStatus() {
    navigation.navigate("stats");
  }

  return (
    <Container>
      <Header />
      <QuickStats onClick={handleStatus} />
      <Meals />
    </Container>
  );
}
