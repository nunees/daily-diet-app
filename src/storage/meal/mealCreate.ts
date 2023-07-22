import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: string) {
  try {
    const storageMeals = await mealsGetAll();
    const storage = JSON.stringify([...storageMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
