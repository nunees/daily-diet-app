import { Container, TextInput } from "./styles";

type Props = {
  width?: string;
  height?: string;
  multiline?: boolean;
  keyboardType?: "numeric" | "phone-pad" | "default" | undefined;
  onChangeText?: (text: string) => void;
  defaultValue?: string;
  onPress?: () => void;
  editable?: boolean;
};

export function Input({
  width,
  height,
  multiline,
  keyboardType,
  onChangeText,
  defaultValue,
  onPress,
  editable,
  ...rest
}: Props) {
  return (
    <Container>
      <TextInput
        editable={editable}
        onPressIn={onPress}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        width={width}
        height={height}
        {...rest}
      />
    </Container>
  );
}
