import goodImage from "@assets/Illustration.png";
import badImage from "@assets/Illustration2.png";
import { Text } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  Illustration,
  SubTitle,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Result() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Continue assim!</Title>
      <SubTitle>
        você continua
        <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem.
      </SubTitle>
      <Illustration source={goodImage} />
      <Button onPress={() => navigation.navigate("home")}>
        <ButtonText> Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  );
}
