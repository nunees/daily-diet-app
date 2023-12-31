import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { NewMeal } from "@screens/NewMeal";
import { Result } from "@screens/Result";
import { Stats } from "@screens/Stats";
import { Details } from "@screens/details";
import { Edit } from "@screens/edit";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="result" component={Result} />
      <Screen name="mealdetails" component={MealDetails} />
      <Screen name="details" component={Details} />
      <Screen name="edit" component={Edit} />
    </Navigator>
  );
}
