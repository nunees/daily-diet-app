import {
  ButtonProps,
  Container,
  IconPen,
  IconPlus,
  IconTrash,
  Title,
} from "./styles";

type Props = ButtonProps & {
  haveIcon: boolean;
  icon: "PLUS" | "TRASH" | "EDIT" | "NONE";
  title: string;
  onPress: () => void;
};

export function Button({
  haveIcon = false,
  icon,
  btnColor,
  title,
  btnWidth,
  btnHeight,
  onPress,
}: Props) {
  console.log(btnWidth);
  return (
    <Container
      onPress={onPress}
      btnColor={btnColor}
      btnHeight={btnHeight}
      btnWidth={btnWidth}
    >
      {haveIcon && icon === "PLUS" ? (
        <IconPlus />
      ) : icon === "TRASH" ? (
        <IconTrash />
      ) : icon === "EDIT" ? (
        <IconPen />
      ) : null}
      <Title btnColor={btnColor}>{title}</Title>
    </Container>
  );
}
