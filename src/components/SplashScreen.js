import { Tooltip } from "react-tooltip";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiCoffeeTogo,
} from "react-icons/bi";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components";

import QuoteGenerator from "./QuoteGenerator";

const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  margin: 10px 0;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
  z-index: 1;
  width: 100%;
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.titleColor};
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  padding: 0px 20px;
  @media (max-width: 768px) {
    padding: 20px 20px;
    justify-content: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 20px;
  & a {
    color: ${(props) => props.theme.titleColor};
    text-decoration: none;
    font-size: 24px;
    padding: 0px 10px;
  }
  & a:hover {
    opacity: 0.7;
  }
`;

const TooltipStyle = styled.div`
  font-size: 1em;
`;

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? (
      <div>
        <HiMoon
          size={24}
          data-tooltip-id="darkmode"
          data-tooltip-content="Dark Mode"
          data-tooltip-place="right"
        />
        <TooltipStyle>
          <Tooltip id="darkmode" />
        </TooltipStyle>
      </div>
    ) : (
      <div>
        <CgSun
          size={24}
          data-tooltip-id="lightmode"
          data-tooltip-content="Light Mode"
          data-tooltip-place="right"
        />
        <TooltipStyle>
          <Tooltip id="lightmode" />
        </TooltipStyle>
      </div>
    );

  return (
    <Page>
      <Navbar>
        <NavbarContainer>
          <Toggle onClick={changeTheme}>{icon}</Toggle>
        </NavbarContainer>
      </Navbar>
      <Container>
        <QuoteGenerator />
      </Container>
      <Footer>
        <FooterLinks>
          <a
            href="https://github.com/sabrinabertol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sabrinabertol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare />
          </a>
          <a
            href="https://www.buymeacoffee.com/sabrinabertol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCoffeeTogo />
          </a>
        </FooterLinks>
      </Footer>
    </Page>
  );
}

export default Splash;
