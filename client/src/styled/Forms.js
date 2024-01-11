import styled, {css} from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  min-height: 13vh;
  max-width: 30vw;
  margin: .3em;
  border-radius: 25px;
  font-size: 3em;
  padding-left: 10px;
  font-family: 'Ilisarniq-Bold';

  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.backgroundColor};
      color: ${props.theme.foregroundColor};
      border: 2px solid ${props.theme.foregroundColor};
    `}
`;

export const AuthInput = styled(Input)`
  max-width: 40vw;
  font-size: 2em;
  border-radius: 15px;
  min-height: 5vh;
`;

export const ColorInput = styled(Input)`
  width: 20vw;
  height: 10vh;
  font-size: 2em;
  border: none;
  min-height: 5vh;
`;

export const Label = styled.label`
display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchForm = styled(Form)`
  max-width: 40vw;
`;

export const SearchInput = styled(Input)`
  max-width: 40vw;
  grid-row: 9;
`;

export const Title = styled.div`
  font-size: 2em;
  align-self: flex-start;
  text-align: left;
  margin: 10px 0 0 10px;
  font-weight: 666;
  font-family: 'Ilisarniq-Black';

`;



