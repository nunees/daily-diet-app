import { MealCreateProps } from "./mealCreate";

interface MealsByDate {
  date: string;
  data: MealCreateProps[];
}

export function getMealsByDate(meals: MealCreateProps[]): MealsByDate[] {
  const mealsByDate = meals.reduce((acc: MealsByDate[], meal) => {
    const date = meal.date;
    const dateIndex = acc.findIndex((item) => item.date === date);

    if (dateIndex === -1) {
      return [...acc, { date, data: [meal] }];
    }

    acc[dateIndex].data.push(meal);
    return acc;
  }, []);

  return mealsByDate;
}
