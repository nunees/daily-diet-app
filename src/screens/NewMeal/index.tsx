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
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { BackHeader } from "@components/BackHeader";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export function NewMeal() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [isDiet, setIsDiet] = useState<boolean>(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSubmition() {}

  return (
    <Container>
      <BackHeader title={"Nova refeição"} color="GREEN" />
      <Content>
        <InputLabel label={"Nome"} />
        <Input width={"327"} height={"48"} onChangeText={() => setName} />
        <InputLabel label={"Descrição"} />
        <Input
          multiline
          width={"327"}
          height={"120"}
          onChangeText={() => setDescription}
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
                onChange: (event, d) => {
                  const userDate = d?.toLocaleDateString("pt-BR");
                  setDate(userDate as string);
                  console.log("Date: " + date);
                },
              });
            }}
          />
          <Input
            keyboardType="numeric"
            width={"153"}
            height={"48"}
            defaultValue={hour}
            onChangeText={() => console.log("oi")}
            onPress={() => {
              DateTimePickerAndroid.open({
                testID: "dateTimePicker",
                mode: "time",
                value: new Date(),
                is24Hour: true,
                onChange: (event, date) => {
                  const userHours = date?.getHours();
                  const userMinutes = date?.getMinutes();
                  const newHour = userHours + ":" + userMinutes;
                  setHour(newHour);
                  console.log("Hour: " + hour);
                },
              });
            }}
          />
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

        <View style={{ paddingTop: 180 }}>
          <Button
            btnColor="BLACK"
            icon="EDIT"
            title="Cadastrar Refeição"
            onPress={() => navigation.navigate("result", meal)}
            haveIcon={false}
            btnWidth={327}
            btnHeight={48}
          />
        </View>
      </Content>
    </Container>
  );
}
