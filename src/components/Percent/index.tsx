import { View } from "react-native";
import {
  Container,
  PercentDetails,
  PercentText,
  PercentCounter,
  UpArrowIcon,
  IconContainer,
} from "./styles";

export function Percent() {
  return (
    <Container>
      <PercentDetails>
        <IconContainer>
          <UpArrowIcon />
        </IconContainer>
        <PercentCounter>90,86%</PercentCounter>
        <PercentText>das refeições dentro da dieta</PercentText>
      </PercentDetails>
    </Container>
  );
}
