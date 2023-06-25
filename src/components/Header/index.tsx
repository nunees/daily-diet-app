import { Avatar, Container, Logo } from "./styles";

import logoImg from "@assets/logo.png";
import avatar from "@assets/Ellipse.png";

export function Header() {
  return (
    <>
      <Container>
        <Logo source={logoImg} />
        <Avatar source={avatar} />
      </Container>
    </>
  );
}
