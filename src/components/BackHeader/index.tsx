import { BackButton } from "@components/BackButton";
import { Header, Title, Container, BackHeaderProps } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = BackHeaderProps & {
  title: string;
  isToggledModal?: boolean;
};

export function BackHeader({ color, title, isToggledModal }: Props) {
  return (
    <Container isToggledModal={isToggledModal} color={color}>
      <Header color={color}>
        <BackButton />
        <Title>{title}</Title>
      </Header>
    </Container>
  );
}
