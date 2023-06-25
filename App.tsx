import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import theme from "./src/theme";

import { LoadIndicator } from "@components/Loading/styles";
import { Home } from "@screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <LoadIndicator />}
      </>
    </ThemeProvider>
  );
}
