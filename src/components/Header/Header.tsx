import { Link } from "react-router-dom";

import Button from "../Button/Button";

import Logo from "../../../public/image/acy_securities_colour_logo.svg";

import { HeaderContainer, Nav } from "./Header.style";

const Header = () => {
  console.log("render Header");

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <a className="link" href="#">
          Why ACY
        </a>
        <a className="link" href="#">
          Products
        </a>
        <a className="link" href="#">
          Platforms
        </a>
        <a className="link" href="#">
          Education
        </a>
        <a className="link" href="#">
          Partners
        </a>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Button type={"primary"}>Register</Button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
