import { Content } from "@screens/MealDetails/styles";
import { Container, Message, ModalStyleProps } from "./styles";
import { View } from "react-native";
import { Button } from "@components/Button";

type Props = ModalStyleProps & {
  message: string;
  btnCancelText: string;
  btnConfirmText: string;
  onCancelPress: () => void;
  onConfirmPress: () => void;
};

export function ModalContent({
  message,
  btnCancelText,
  btnConfirmText,
  onCancelPress,
  onConfirmPress,
}: Props) {
  return (
    <Container>
      <Content>
        <Message>{message}</Message>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            btnColor={"WHITE"}
            haveIcon={false}
            icon={"NONE"}
            title={btnCancelText}
            onPress={onCancelPress}
            btnWidth={135}
            btnHeight={50}
          />
          <Button
            btnColor={"BLACK"}
            haveIcon={false}
            icon={"NONE"}
            title={btnConfirmText}
            onPress={onConfirmPress}
            btnWidth={135}
            btnHeight={50}
          />
        </View>
      </Content>
    </Container>
  );
}
