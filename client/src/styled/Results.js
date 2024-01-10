import styled, { css } from "styled-components";

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  gap: 10px;
  grid-template-rows: 1fr 5fr 2fr;
  min-height: 90vh;
  max-height: 90vh;
  margin: 0 5px;
  width: 100%;
`;

export const Title = styled.div`
  grid-column: 1 / 2;
  grid-row: 1;
  font-size: 2em;
  align-self: flex-start;
  text-align: left;
  margin: 10px 0 0 10px;
  font-weight: 666;
  font-family: 'Ilisarniq-Black';

`;

export const ResultsList = styled.ul`
  grid-column: 1;
  grid-row: 2 / 5;
  margin-left: 5px;
  /* margin-bottom: 5px; */
  font-size: 1.5em;
  border-radius: 15px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;

export const ListItem = styled.li`
  border-radius: 15px;
  margin: 4px;
  padding: 3px;
  text-align: center;
  font-family: 'Ilisarniq-Demi';

  

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;

export const Display = styled.div`
  grid-column: 2;
  grid-row: 1 / 5;
  /* border: 3px solid #fadde1; */
  border-radius: 25px;
  margin: 5px 0 5px 0;
  overflow-y: scroll;
`;

export const UserCard = styled.div`
  grid-column: 3;
  grid-row: 3 / 4;
  border: 3px solid #fadde1;
  border-radius: 25px;
  max-width: 90%;
  margin: 10px 5px;
  padding: 20px 5px;
`;

export const UserCardImg = styled.img`
  max-width: 10vw;
`;

export const ButtonContainer = styled.div`
  grid-column: 3;
  grid-row: 4 / 5;
  display: flex;
  flex-direction: column;
`;

export const LibraryButton = styled.button`
  font-size: 1em;
  min-width: 90%;
  margin: 5px;

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;
