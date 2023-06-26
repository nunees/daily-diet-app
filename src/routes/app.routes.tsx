import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screens/Home";
import { Stats } from "@screens/Stats";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="home" component={Home} /> */}
      <Screen name="stats" component={Stats} />
    </Navigator>
  );
}
