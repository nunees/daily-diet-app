import { useNavigation } from "@react-navigation/native";
import { BackArrowIcon, Container } from "./styles";

export function BackButton() {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("home")}>
      <BackArrowIcon />
    </Container>
  );
}
