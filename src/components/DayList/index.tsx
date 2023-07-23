import { DateTitle } from "@components/DateTitle";
import { SectionList } from "react-native";
import {
  CardStatusStyleProps,
  Card,
  CardDescription,
  CardHour,
  CardStatus,
  Container,
  Divider,
} from "./styles";
import { NoItems } from "@components/NoItems";
import { useCallback, useEffect, useState } from "react";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { useFocusEffect } from "@react-navigation/native";

import { MealCreateProps } from "@storage/meal/mealCreate";
import { Loading } from "@components/Loading";
import { getMealsByDate } from "@storage/meal/getMealsByDate";

export interface IMealsHistory {
  date: string;
  data: MealCreateProps[];
}

export function DayList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meals, setMeals] = useState<IMealsHistory[]>([]);

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await mealsGetAll();
      const mealsByDate = getMealsByDate(data);

      console.log(mealsByDate);

      setMeals(mealsByDate.sort().reverse());

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <>
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <SectionList
            sections={meals}
            ListEmptyComponent={() => <NoItems />}
            renderSectionHeader={({ section: { date } }) => (
              <DateTitle date={date} />
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card onPress={() => console.log(item)}>
                <CardHour>{item.hours}</CardHour>
                <Divider />
                <CardDescription>{item.name}</CardDescription>
                <CardStatus healthier={item.isDiet ? "GOOD" : "BAD"} />
              </Card>
            )}
          ></SectionList>
        )}
      </Container>
    </>
  );
}
