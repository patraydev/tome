import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 3em;
  font-family: "Ilisarniq";
  border: 3px solid #fadde1;
  background-color: #3c3c3c;
  border-radius: 20px;
  color: #fadde1;
  padding: 0.3em 1em;
  align-items: center;
  outline: none;
  z-index: 1;
  border-width: 0.1em;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
      border: 2px solid ${props.color};
    `}

  ${(props) =>
    props.currentUser &&
    css`
      background-color: ${props.currentUser.backgroundColor};
      color: ${props.currentUser.foregroundColor};
      border: 2px solid ${props.currentUser.foregroundColor};
    `}
`;
