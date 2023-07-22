import { Container, Title } from "./styles";
import { Header } from "@components/Header";
import { QuickStats } from "@components/QuickStats";
import { Meals } from "@components/Meals";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Button } from "@components/Button";
import { View } from "react-native";

export function Home() {
  const navigation = useNavigation();

  function handleStatus() {
    navigation.navigate("stats");
  }

  function handleGoToNewMeal() {
    navigation.navigate("newmeal");
  }

  return (
    <Container>
      <Header />
      <QuickStats onClick={handleStatus} />
      <Title>Refeições</Title>
      <View style={{ alignSelf: "center" }}>
        <Button
          haveIcon={true}
          title={"Nova Refeição"}
          onPress={handleGoToNewMeal}
          btnColor={"BLACK"}
          icon={"PLUS"}
          btnWidth={327}
          btnHeight={50}
        />
      </View>
      <Meals />
    </Container>
  );
}
