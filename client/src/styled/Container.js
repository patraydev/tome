import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 666;
  justify-content: center;
  align-items: center;
  flex: auto;

  ${(props) =>
    props.theme &&
    css`
      /* background-color: ${props.theme.backgroundColor}; */
      color: ${props.theme.foregroundColor};
    `}


`;



