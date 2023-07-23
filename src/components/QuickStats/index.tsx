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
  color: "RED" | "GREEN";
  percent: number;
};

export function QuickStats({ onClick, color, percent }: Props) {
  return (
    <Container onPress={onClick}>
      <PercentDetails color={color}>
        <IconContainer>
          <UpArrowIcon color={color} />
        </IconContainer>
        <Highlight percent={percent} />
      </PercentDetails>
    </Container>
  );
}
