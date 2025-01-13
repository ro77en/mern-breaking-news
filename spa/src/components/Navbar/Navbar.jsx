import logo from "../../images/logo.png";
import { Button, ImgLogo, InputWrapper, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputWrapper className="input-search-wrapper">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputWrapper>

        <ImgLogo src={logo} alt="Logo Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
