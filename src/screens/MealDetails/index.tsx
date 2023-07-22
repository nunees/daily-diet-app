import { BackHeader } from "@components/BackHeader";
import {
  Container,
  Content,
  DateAndTime,
  DateAndTimeLabel,
  Description,
  Title,
} from "./styles";
import { Button } from "@components/Button";
import { Text, View } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import { ModalContent } from "@components/ModalContent";

export function MealDetails() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <>
      <Container>
        <BackHeader title={"Editar Refeição"} color={"GREEN"} />
        <Content>
          <Title>Sanduiche</Title>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
          <DateAndTimeLabel>Data e Hora</DateAndTimeLabel>
          <DateAndTime>12/08/2022 às 16:00</DateAndTime>

          <View style={{ marginTop: 400 }}>
            <Button
              btnColor="BLACK"
              title="Editar Refeição"
              haveIcon={false}
              onPress={() => handleModal()}
              icon={"EDIT"}
              btnWidth={"327"}
              btnHeight={"50"}
            />
            <Button
              icon={"TRASH"}
              btnColor="WHITE"
              title="Excluir Refeição"
              haveIcon={false}
              onPress={() => setIsModalVisible(false)}
              btnWidth={"327"}
              btnHeight={"50"}
            />
          </View>
        </Content>
      </Container>
      {isModalVisible && (
        <Modal
          hasBackdrop={false}
          isVisible={isModalVisible}
          onBackButtonPress={() => setIsModalVisible(false)}
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            flex: 1,
            position: "relative",
            width: "100%",
            height: "100%",
            top: 0,
            right: 19,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalContent
            btnColor={"PRIMARY"}
            btnTextColor={"PRIMARY"}
            message={"Deseja realmente excluir o registro da refeição?"}
            btnCancelText={"Nao"}
            btnConfirmText={"Sim, exluir"}
            onCancelPress={() => console.log("cancel")}
            onConfirmPress={() => console.log("confirm")}
          />
        </Modal>
      )}
    </>
  );
}
