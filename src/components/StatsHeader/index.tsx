import { QuickStats } from "@components/QuickStats";
import { BackArrowIcon, Container } from "./styles";
import { Highlight } from "@components/Highlight";

export function StatsHeader() {
  return (
    <Container>
      <Highlight />
      <BackArrowIcon />
    </Container>
  );
}
