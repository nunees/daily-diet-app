import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export type MealCreateProps = {
  id: string;
  date: string;
  name: string;
  description: string;
  hours: string;
  isDiet: boolean;
};

export async function mealCreate({
  ...newMeal
}: MealCreateProps): Promise<void> {
  try {
    const storedMeals = await mealsGetAll();
    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
