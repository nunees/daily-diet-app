import { Container, Title } from "./styles";

type Props = {
  date: String;
};

export function DateTitle({ date }: Props) {
  return (
    <Container>
      <Title>{date}</Title>
    </Container>
  );
}
