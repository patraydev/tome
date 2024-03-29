import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "./mediaQueries.js";

import tome from "../assets/images/tome.png";


//another way to consider implementing props:
// const myCSS = css`
//   background-color: ${({ backgroundColor }) => backgroundColor || `blue`};
// `;

// const MyComponent = styled("div")`
//   ${myCSS};
// `;

export const Nav = styled.nav`
  /* position: relative; */
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5em;
  padding-inline-start: 0.5em;

  ${(props) =>
    props.currentUser &&
    css`
      background-color: ${props.currentUser.backgroundColor};
    `}


  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
    
    
    `;

export const NavItems = styled.ul`
  list-style: none;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavIcon = styled(Link)`
  background-image: url(${tome});
  height: 5em;
  width: 5em;
  margin-right: 0.5em;
  background-size: cover;

  ${(props) =>
    props.src &&
    css`
      background-image: url(${props.src});
    `}
`;

export const NavItem = styled(Link)`
  margin-top: 20px;
  cursor: pointer;
  transition: 250ms;
  cursor: pointer;
  text-decoration: none;
  font-size: 2em;
  margin-right: 0.7em;
  font-family: 'Ilisarniq-Demi';


  &:hover {
    transform: scale(1.25);
  }

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const NavBrand = styled(NavItem)`
  flex-grow: 0;
  font-family: 'Ilisarniq-Black';

  ${mediaQueries("phone")} {
    font-size: 48px;
  }
`;

export const NavItemButton = styled(NavItem)`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2em;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}/* add additional styled if primary*/
    /* ${(props) =>
    props.solid &&
    css`
      background-color: ${props.color} || #663399;
      color: white;
    `} */
`;
