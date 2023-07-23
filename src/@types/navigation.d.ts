export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: {
        percent: number;
        totalMealsInDietSequence: number;
        totalMealsInDiet: number;
        totalMealsOutOfDiet: number;
        totalMeals: number;
      };
      newmeal: undefined;
      result: {
        isDiet: boolean;
      };
      mealdetails: undefined;
    }
  }
}
