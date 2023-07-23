import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealsDeleteById(id: string) {
  try {
    const storage = await mealsGetAll();
    const filteredMeals = storage.filter((meal) => meal.id !== id);
    const meals = JSON.stringify(filteredMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}
