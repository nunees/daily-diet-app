import { View } from "react-native";
import {
  Container,
  PercentDetails,
  PercentText,
  PercentCounter,
  UpArrowIcon,
  IconContainer,
} from "./styles";
import { Highlight } from "@components/Highlight";

type Props = {
  onClick: () => void;
};

export function QuickStats({ onClick }: Props) {
  return (
    <Container onPress={onClick}>
      <PercentDetails>
        <IconContainer>
          <UpArrowIcon />
        </IconContainer>
        <Highlight />
      </PercentDetails>
    </Container>
  );
}
