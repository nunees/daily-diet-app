import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { CodesandboxLogo } from "phosphor-react-native";

export type MealsEditProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  hours: string;
  isDiet: boolean;
};

export async function mealsEdit({
  id,
  name,
  description,
  date,
  hours,
  isDiet,
}: MealsEditProps) {
  try {
    console.log("IS DIET -> " + isDiet);

    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);

    const mealsParsed: MealsEditProps[] = meals ? JSON.parse(meals) : [];

    const mealsUpdated = mealsParsed.map((meal: MealsEditProps) => {
      if (meal.id === id) {
        return {
          ...meal,
          name: name,
          description: description,
          date: date,
          hours: hours,
          isDiet: isDiet ? true : false,
        };
      }
      return meal;
    });

    const storage = JSON.stringify(mealsUpdated);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
