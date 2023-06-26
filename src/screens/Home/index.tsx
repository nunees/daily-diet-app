import { Container } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Meals } from "@components/Meals";
import { DateTitle } from "@components/DateTitle";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
      <Meals />
    </Container>
  );
}
