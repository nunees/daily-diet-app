import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Header,
  StatusBox,
  StatusLight,
  StatusText,
  Text,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { BackHeader } from "@components/BackHeader";
import { InputLabel } from "@components/InputLabel";
import { Button } from "@components/Button";
import { View } from "react-native";
import { mealsDeleteById } from "@storage/meal/mealsDeleteById";
import { ModalContent } from "@components/ModalContent";
import { MealCreateProps } from "@storage/meal/mealCreate";

type RouteParams = {
  id: string;
};

export function Details() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [isDiet, setIsDiet] = useState<boolean>(false);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const navigation = useNavigation();
  const routes = useRoute();

  const { id } = routes.params as RouteParams;

  function handleNavigation() {
    navigation.navigate("edit", {
      id,
      name,
      description,
      date,
      hours,
      isDiet,
    });
  }

  async function mealsGetById(id: string) {
    const meals = await mealsGetAll();
    const filteredMeals = meals.filter(
      (meal: MealCreateProps) => meal.id === id
    );
    setName(filteredMeals[0].name);
    setDescription(filteredMeals[0].description);
    setDate(filteredMeals[0].date);
    setHours(filteredMeals[0].hours);
    setIsDiet(filteredMeals[0].isDiet);
  }

  async function handleDeleteMeal(id: string) {
    try {
      await mealsDeleteById(id);
      navigation.navigate("home");
      setToggleModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setToggleModal(false);
      navigation.navigate("home");
    }
  }

  useEffect(() => {
    mealsGetById(id);
  }, []);

  return (
    <Container>
      <BackHeader
        isToggledModal={toggleModal}
        title={"Refeição"}
        color={isDiet ? "GREEN" : "RED"}
      />
      <Content isModalToggled={toggleModal}>
        <InputLabel label={name} />
        <Text>{description}</Text>
        <InputLabel label={"Data e hora"} />
        <Text>{date + " ás " + hours}</Text>
        <StatusBox>
          <StatusLight light={isDiet ? "GREEN" : "RED"} />
          <StatusText>
            {isDiet ? "dentro da dieta" : "fora da dieta"}
          </StatusText>
        </StatusBox>

        {toggleModal && (
          <ModalContent
            btnColor={"PRIMARY"}
            btnTextColor={"PRIMARY"}
            message={"Deseja realmente excluir o registro da refeição?"}
            btnCancelText={"Cancelar"}
            btnConfirmText={"Sim, excluir"}
            onCancelPress={() => setToggleModal(false)}
            onConfirmPress={() => handleDeleteMeal(id)}
          />
        )}

        <View style={{ position: "absolute", top: 600, left: 35 }}>
          <Button
            btnColor="BLACK"
            icon="EDIT"
            title="Editar Refeição"
            onPress={() => handleNavigation()}
            haveIcon={false}
            btnWidth={327}
            btnHeight={48}
          />
          <Button
            btnColor="WHITE"
            icon="TRASH"
            title="Excluir Refeição"
            onPress={() => setToggleModal(true)}
            haveIcon={false}
            btnWidth={327}
            btnHeight={48}
          />
        </View>
      </Content>
    </Container>
  );
}
