import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 666;
  justify-content: center;
  align-items: center;

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



