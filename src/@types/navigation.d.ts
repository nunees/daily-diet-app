export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      edit: {
        id: string;
        name: string;
        description: string;
        date: string;
        hours: string;
        isDiet: boolean;
      };
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
      details: {
        id: string;
      };
    }
  }
}
