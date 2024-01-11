import styled, { css }  from "styled-components";

export const Children = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 80vh; */
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: visible;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
    `}
`;
