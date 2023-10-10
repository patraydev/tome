import styled, {css} from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  align-items: center;
`;

export const SearchInput = styled.input`
  min-height: 13vh;
  max-width: 30vw;
  margin: 1em;
  border-radius: 25px;
  font-size: 3em;
  padding-left: 10px;

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;





