import { Container, Title } from "./styles";
import { Header } from "@components/Header";
import { QuickStats } from "@components/QuickStats";
import { Meals } from "@components/Meals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Button } from "@components/Button";
import { View } from "react-native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealsEditProps } from "@storage/meal/mealsEdit";
import { IMeals } from "@components/DayList";
import { MealCreateProps } from "@storage/meal/mealCreate";

type IMeal = {
  id: string;
  name: string;
  description: string;
  date: string;
  hours: string;
  isDiet: boolean;
};

export function Home() {
  const [percentInDiet, setPercentInDiet] = useState<number>(0);
  const [meals, setMeals] = useState<IMeals[]>([]);

  const navigation = useNavigation();

  function handleStatus() {
    navigation.navigate("stats", {
      percent: percentInDiet,
      totalMealsInDietSequence: getTotalMealsInDietSequence(meals),
      totalMealsInDiet: getTotalMealsInDiet(),
      totalMealsOutOfDiet: getTotalMealsOutOfDiet(),
      totalMeals: meals.length,
    });
  }

  function handleGoToNewMeal() {
    navigation.navigate("newmeal");
  }

  // function getPercentInDiet() {
  //   const mealsInDiet = meals.reduce((acc: number, meal) => {
  //     meal ? (acc += 1) : (acc += 0);
  //     return acc;
  //   }, 0);
  //   const percent = (mealsInDiet / meals.length) * 100;
  //   setPercentInDiet(percent);
  // }

  function getPercentInDiet(arr: IMeal[]) {
    if (arr.length > 0) {
      const mealsInDiet = arr.filter((meal) => meal.isDiet === true);
      const calPercent = (mealsInDiet.length / arr.length) * 100;
      setPercentInDiet(calPercent);
    }
  }

  function getTotalMealsInDiet() {
    const mealsInDiet = meals.reduce((acc: number, meal: any) => {
      meal.isDiet ? (acc += 1) : (acc += 0);
      return acc;
    }, 0);
    return mealsInDiet;
  }

  function getTotalMealsOutOfDiet() {
    const mealsOutDiet = meals.reduce((acc: number, meal: any) => {
      !meal.isDiet ? (acc += 1) : (acc += 0);
      return acc;
    }, 0);
    return mealsOutDiet;
  }

  async function getAllMeals() {
    const meals = await mealsGetAll();
    getPercentInDiet(meals);
    setMeals(meals);
  }

  function getTotalMealsInDietSequence(meals: IMeals[]) {
    let maxSequence = 0;
    let currentSequence = 0;

    for (let i = 0; i < meals.length; i++) {
      const date = meals[i].date;
      for (let j = 0; j < meals.length; j++) {
        if (meals[j].date === date) {
          if (meals[j].date) {
            currentSequence++;
            maxSequence = Math.max(maxSequence, currentSequence);
          } else {
            currentSequence = 0;
          }
        }
      }
    }

    return maxSequence;
  }

  useFocusEffect(
    useCallback(() => {
      getAllMeals();
    }, [])
  );

  return (
    <Container>
      <Header />
      <QuickStats
        onClick={handleStatus}
        color={Number(percentInDiet) < 50 ? "RED" : "GREEN"}
        percent={percentInDiet}
      />
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
