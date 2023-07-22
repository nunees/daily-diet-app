import { Container, TextInput } from "./styles";

type Props = {
  width?: string;
  height?: string;
};

export function Input({ width, height }: Props) {
  return (
    <Container>
      <TextInput width={width} height={height} />
    </Container>
  );
}
