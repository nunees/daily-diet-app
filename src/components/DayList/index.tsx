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
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { MealCreateProps } from "@storage/meal/mealCreate";
import { Loading } from "@components/Loading";
import { getMealsByDate } from "@storage/meal/getMealsByDate";

export interface IMeals {
  date: string;
  data: MealCreateProps[];
}

export function DayList() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meals, setMeals] = useState<IMeals[]>([]);

  function handleNavigation(id: string) {
    navigation.navigate("details", { id });
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await mealsGetAll();
      const mealsByDate = getMealsByDate(data);

      setMeals(
        mealsByDate.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
          return 0;
        })
      );

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
              <Card onPress={() => handleNavigation(item.id)}>
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
