import styled from "styled-components";
import Button from "../Button";
import colors from "@constants/colors";

const navElements = ["Home", "About", "Contact", "Blog", "Careers"];
const { blue, green, cyan } = colors["easy-bank"];

const DesktopAppBar = () => {
  return (
    <>
      <Nav>
        <Ul>
          {navElements.map((el) => (
            <li key={el}>
              <NavLink href={"#" + el.toLowerCase()}>{el}</NavLink>
            </li>
          ))}
        </Ul>
      </Nav>
      <Button>Request Invite</Button>
    </>
  );
};

export default DesktopAppBar;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min-content;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;

  li {
    flex: 1;
  }
`;

const NavLink = styled.a`
  color: ${blue.main};
  padding: 8px 12px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${blue.dark};
    cursor: pointer;

    &::after {
      content: "";
      height: 4px;
      position: absolute;
      top: calc(100% + 12px);
      tranform: translateY(-50%);
      left: 0;
      right: 0;
      background: linear-gradient(to right, ${green}, ${cyan});
    }
  }
`;
