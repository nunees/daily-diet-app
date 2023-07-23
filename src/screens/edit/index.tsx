import { View } from "react-native";
import {
  Container,
  Content,
  StatusBox,
  StatusLight,
  StatusText,
} from "./styles";
import { BackHeader } from "@components/BackHeader";
import { InputLabel } from "@components/InputLabel";
import { Input } from "@components/Input";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button } from "@components/Button";
import { useState } from "react";
import theme from "@theme/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealsEdit } from "@storage/meal/mealsEdit";

type RouteParams = {
  id: string;
  name: string;
  description: string;
  date: string;
  hours: string;
  isDiet: boolean;
};

export function Edit() {
  const [tempName, setTempName] = useState<string>("");
  const [tempDescription, setTempDescription] = useState<string>("");
  const [tempDate, setTempDate] = useState<string>("");
  const [tempHours, setTempHours] = useState<string>("");
  const [tempIsDiet, setTempIsDiet] = useState<boolean>(true);

  const navigation = useNavigation();
  const routes = useRoute();

  const { id, date, description, hours, isDiet, name } =
    routes.params as RouteParams;

  const [btnYes, setBtnYes] = useState<boolean>(true);
  const [btnNo, setBtnNo] = useState<boolean>(false);

  async function handleEditMeal() {
    console.log(tempIsDiet);
    try {
      const result = await mealsEdit({
        id,
        name: tempName || name,
        description: tempDescription || description,
        date: tempDate || date,
        hours: tempHours || hours,
        isDiet: tempIsDiet,
      });
    } catch (error) {
      console.log("Edit Error: " + error);
    } finally {
      navigation.navigate("home");
    }
  }

  function handleHours(hour: Date) {
    const hours = hour
      .toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split(" ")[1];
    setTempHours(hours);
  }

  function handleDate(date: Date): void {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setTempDate(`${day}/${month}/${year}`);
  }

  function handleToggleButton() {
    setBtnNo((current) => !current);
    setBtnYes((current) => !current);
  }

  return (
    <Container>
      <BackHeader color="GREY" title={"Editar Refeição"} />
      <Content>
        <InputLabel label={"Nome"} />
        <Input
          width={"327"}
          height={"48"}
          defaultValue={name}
          onChangeText={(text) => setTempName(text)}
        />
        <InputLabel label={"Descrição"} />
        <Input
          multiline
          width={"327"}
          height={"120"}
          defaultValue={description}
          onChangeText={(text) => setTempDescription(text)}
        />

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
          <Input
            keyboardType="numeric"
            width={"153"}
            height={"48"}
            defaultValue={tempDate || date}
            onPress={() => {
              DateTimePickerAndroid.open({
                testID: "dateTimePicker",
                mode: "date",
                value: new Date(),
                is24Hour: true,
                onChange: (event, date) => handleDate(date as Date),
              });
            }}
          />
          <Input
            keyboardType="numeric"
            width={"153"}
            height={"48"}
            defaultValue={tempHours || hours}
            onChangeText={(text) => setTempHours(text)}
            onPress={() => {
              DateTimePickerAndroid.open({
                testID: "dateTimePicker",
                mode: "time",
                value: new Date(),
                is24Hour: true,
                onChange: (event, date) => handleHours(date as Date),
              });
            }}
          />
        </View>

        <InputLabel label={"Está dentro da dieta?"} />

        <View style={{ flexDirection: "row" }}>
          <StatusBox
            onPress={() => {
              handleToggleButton();
              setTempIsDiet(true);
            }}
            style={
              btnYes && !btnNo
                ? {
                    borderWidth: 1,
                    borderColor: theme.COLORS.GREEN_DARK,
                    backgroundColor: theme.COLORS.GREEN_LIGHT,
                  }
                : {
                    borderWidth: 0,
                    borderColor: theme.COLORS.GRAY_100,
                  }
            }
          >
            <StatusLight light="GREEN" />
            <StatusText>Sim</StatusText>
          </StatusBox>

          <StatusBox
            onPress={() => {
              handleToggleButton();
              setTempIsDiet(false);
            }}
            style={
              btnNo && !btnYes
                ? {
                    borderWidth: 1,
                    borderColor: theme.COLORS.RED_DARK,
                    backgroundColor: theme.COLORS.RED_LIGHT,
                  }
                : {
                    borderWidth: 0,
                    borderColor: theme.COLORS.GRAY_100,
                  }
            }
          >
            <StatusLight light="RED" />
            <StatusText>Não</StatusText>
          </StatusBox>
        </View>

        <View style={{ paddingTop: 180 }}>
          <Button
            btnColor="BLACK"
            icon="NONE"
            title="Salvar alterações"
            onPress={() => handleEditMeal()}
            haveIcon={false}
            btnWidth={327}
            btnHeight={48}
          />
        </View>
      </Content>
    </Container>
  );
}
function mealsEditById(
  id: string,
  name: string,
  description: string,
  date: string,
  hours: string,
  isDiet: boolean
) {
  throw new Error("Function not implemented.");
}
