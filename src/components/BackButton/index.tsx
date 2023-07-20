import { BackArrowIcon, Container } from "./styles";

type Props = {
  onPress: () => void;
};

export function BackButton({ onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <BackArrowIcon />
    </Container>
  );
}
