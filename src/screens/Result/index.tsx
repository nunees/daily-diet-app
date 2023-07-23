import goodImage from "@assets/Illustration.png";
import badImage from "@assets/Illustration2.png";
import { Text, View } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  Illustration,
  SubTitle,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import theme from "@theme/index";

type RouteParams = {
  isDiet: boolean;
};

export function Result() {
  const routes = useRoute();
  const navigation = useNavigation();
  const { isDiet } = routes.params as RouteParams;

  return (
    <Container>
      {isDiet ? (
        <>
          <Title>Continue assim!</Title>
          <SubTitle>
            você continua
            <Text style={{ fontWeight: "bold" }}> dentro da dieta</Text>. Muito
            bem.
          </SubTitle>
          <Illustration source={goodImage} />
          <Button onPress={() => navigation.navigate("home")}>
            <ButtonText> Ir para a página inicial</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <View>
            <Title style={{ color: theme.COLORS.RED_DARK }}>Que pena!</Title>
            <SubTitle>
              Você
              <Text style={{ fontWeight: "bold" }}> saiu da dieta</Text>, mas
              continue se esforçando e não desista!
            </SubTitle>
            <Illustration source={badImage} />
            <Button onPress={() => navigation.navigate("home")}>
              <ButtonText> Ir para a página inicial</ButtonText>
            </Button>
          </View>
        </>
      )}
    </Container>
  );
}
