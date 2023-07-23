import { Button } from "@components/Button";
import {
  Container,
  Content,
  StatusBox,
  StatusLight,
  StatusText,
} from "./styles";
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { BackHeader } from "@components/BackHeader";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import theme from "@theme/index";
import uuid from "react-native-uuid";
import { MealCreateProps, mealCreate } from "@storage/meal/mealCreate";

export function NewMeal() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [isDiet, setIsDiet] = useState<boolean>(true);

  const [btnYes, setBtnYes] = useState<boolean>(true);
  const [btnNo, setBtnNo] = useState<boolean>(false);

  const navigation = useNavigation();

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
    setHours(hours);
  }

  function handleDate(date: Date): void {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setDate(`${day}/${month}/${year}`);
  }

  function handleToggleButton() {
    setBtnNo((current) => !current);
    setBtnYes((current) => !current);
  }

  async function handleNewMeal() {
    try {
      if (name === "" || description === "" || date === "" || hours === "") {
        return Alert.alert("Nova refeição", "Preencha todos os campos");
      }

      const id = String(uuid.v4());

      const meal: MealCreateProps = {
        date,
        id,
        name,
        description,
        hours,
        isDiet,
      };

      console.log("Add new meal", meal);

      await mealCreate(meal);
      navigation.navigate("result", { isDiet });
    } catch (error) {
      Alert.alert("Nova refeição", "Nao foi possível realizar o cadastro");
      console.log(error);
    }
  }

  return (
    <Container>
      <BackHeader title={"Nova refeição"} color="GREY" />
      <Content>
        <InputLabel label={"Nome"} />
        <Input
          width={"327"}
          height={"48"}
          defaultValue={name}
          onChangeText={(text) => setName(text)}
        />
        <InputLabel label={"Descrição"} />
        <Input
          multiline
          width={"327"}
          height={"120"}
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
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
            defaultValue={date}
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
            defaultValue={hours}
            onChangeText={() => console.log("oi")}
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
              setIsDiet(true);
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
              setIsDiet(false);
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
            icon="EDIT"
            title="Cadastrar Refeição"
            onPress={() => handleNewMeal()}
            haveIcon={false}
            btnWidth={327}
            btnHeight={48}
          />
        </View>
      </Content>
    </Container>
  );
}
