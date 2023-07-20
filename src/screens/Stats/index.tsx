import { Text } from "react-native";
import { Container, Content, Header } from "./styles";
import { StatsHeader } from "@components/StatsHeader";
import { Highlight } from "@components/Highlight";
import { BackButton } from "@components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { StatsDetails } from "@components/StatsDetails";

export function Stats() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container health="GOOD">
      <Header>
        <BackButton onPress={handleGoBack} />
        <Highlight />
      </Header>
      <Content>
        <StatsDetails />
      </Content>
    </Container>
  );
}
