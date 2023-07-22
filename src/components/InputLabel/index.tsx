import { Container, Label } from "./styles";

type Props = {
  label: string;
};

export function InputLabel({ label }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
}
