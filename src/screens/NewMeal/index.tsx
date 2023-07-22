import { Button } from "@components/Button";
import {
  Container,
  Content,
  Header,
  StatusBox,
  StatusLight,
  StatusText,
  Title,
} from "./styles";
import { BackButton } from "@components/BackButton";
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { BackHeader } from "@components/BackHeader";

export function NewMeal() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackHeader title={"Nova refeição"} color="GREEN" />
      <Content>
        <InputLabel label={"Nome"} />
        <Input width={"327"} height={"48"} />
        <InputLabel label={"Descrição"} />
        <Input width={"327"} height={"120"} />

        <View style={{ flexDirection: "row" }}>
          <InputLabel label={"Data"} />
          <View style={{ marginLeft: 145 }}>
            <InputLabel label={"Hora"} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <Input width={"153"} height={"48"} />
          <Input width={"153"} height={"48"} />
        </View>

        <InputLabel label={"Está dentro da dieta?"} />

        <View style={{ flexDirection: "row" }}>
          <StatusBox>
            <StatusLight light="GREEN" />
            <StatusText>Sim</StatusText>
          </StatusBox>

          <StatusBox>
            <StatusLight light="RED" />
            <StatusText>Não</StatusText>
          </StatusBox>
        </View>

        <View style={{ marginTop: 200 }}>
          <Button
            btnColor="BLACK"
            icon="NONE"
            title="Cadastrar Refeição"
            onPress={() => navigation.navigate("result")}
            haveIcon={false}
          />
        </View>
      </Content>
    </Container>
  );
}
