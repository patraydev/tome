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
  background-color: #5c5c5c;
  border: 2px solid #fadde1;
  border-radius: 25px;
  font-size: 3em;
  padding-left: 10px;

  ${(props) =>
        props.foregroundColor &&
        css`
            color: ${props.foregroundColor};
        `} 
    

${(props) =>
  props.backgroundColor &&
  css`
      background-color: ${props.backgroundColor};
  `} 

`;