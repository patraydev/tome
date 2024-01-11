import styled, { css } from "styled-components";
import { mediaQueries } from "./mediaQueries.js";

export const ModalButton = styled.button`
  padding: 5px 5px;
  width: 2em;
  border-radius: 5px;
  z-index: 888;
  cursor: pointer;
  font-size: 2em;

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}

  ${(props) =>
    props.close &&
    css`
      font-size: 2em;
      position: fixed;
      right: 0;
      top: 0;
      margin: .15em;
      padding: .1em .4em .2em .4em;
      display: flex;
      justify-content: center;
      border-radius: 20px;
    `}
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 777;

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}

  ${(props) =>
    props.size && props.size === "large"
      ? css`
          width: 97vw;
          height: 97vh;
        `
      : css`
          ${mediaQueries("phone")} {
            width: 95vw;
            height: 65vh;
          }
          ${mediaQueries("tablet")} {
            width: 65vw;
            height: 80vh;
          }
        `}
        /* ${(props) =>
    props.small &&
    css`
      width: 50vw;
      height: 50vh;
      display: flex;
      flex-flow: column-wrap;
    `}

    ${(props) =>
    props.medium &&
    css`
      width: 65vw;
      height: 70vh;
    `}*/
`;