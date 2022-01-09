import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")}; */
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;
export const NavLogo = styled(Link)`
  color: var(--color-highlight);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: var(--color-highlight);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
  font-size: 1.25rem;
`;

export const NavLinks = styled(Link)`
  color: var(--color-text);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--color-highlight);
  }

  &:hover {
    color: var(--color-highlight);
  }
`;

export const LinkedIn = styled.img`
  height: 40px;
  width: 40px;
`;
export const GitHub = styled.img`
  height: 40px;
  width: 40px;
`;
