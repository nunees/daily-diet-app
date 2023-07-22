import { BackButton } from "@components/BackButton";
import { Header, Title, Container, BackHeaderProps } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = BackHeaderProps & {
  title: string;
};

export function BackHeader({ color, title }: Props) {
  return (
    <Container>
      <Header color={color}>
        <BackButton />
        <Title>{title}</Title>
      </Header>
    </Container>
  );
}
