import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 3em;
  font-family: "Ilisarniq";
  border: 3px solid #fadde1;
  background-color: #3c3c3c;
  border-radius: 20px;
  padding: 0.1em .5em;
  align-items: center;
  outline: none;
  z-index: 1;
  border-width: 0.1em;

    ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;

export const LoginButton = styled(Button)`
 margin-top: 20vh;
`;

export const LibraryButton = styled(Button)`
  font-size: 1em;
  min-width: 90%;
  margin: 5px;
  border-radius: 10px;
  `;