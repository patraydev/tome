import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Ilisarniq';
  src: local('Ilisarniq'), url(./assets/fonts/Ilisarniq-Light.otf) format('truetype');
}

a {
  text-decoration: none;
}

input, textarea {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-family: 'Ilisarniq';
}

textarea{
  resize: none;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

* {
  transition: 333ms;
}

.fade-appear,
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-appear-active,
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms linear 250ms;
}

.fade-exit{
  opacity: 1;
}

.fade-exit.fade-exit-active {
opacity: 0;
transition: opacity 250ms linear;
}


`;
 
export default GlobalStyle;