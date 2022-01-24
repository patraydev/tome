import styled, { css } from "styled-components";
import { mediaQueries } from "./mediaQueries.js";

export const ModalButton = styled.button`
  padding: 10px 10px;
  width: 2em;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2em;
  color: #fadde1;
  background-color: #3c3c3c;
  border: 3px solid #fadde1;

  ${(props) =>
        props.color &&
        css`
            color: ${props.color};
            border: 2px solid ${props.color};
        `} 

  ${(props) =>
    props.close &&
    css`
      font-size: 3em;
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
  background-color: #3c3c3c;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 777;
  color: #fadde1;
  border: 5px solid #fadde1;

  ${(props) =>
        props.color &&
        css`
            border: 5px solid ${props.color};
        `} 

  ${(props) =>
    props.size && props.size === "large"
      ? css`
          width: 90vw;
          height: 90vh;
        `
      : css`
          ${mediaQueries("phone")} {
            width: 90vw;
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