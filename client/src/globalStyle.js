import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* html, body, #app, #app>div { position: absolute; width: 100% !important; height: 100% !important; } */


body, #root{
  height: 100vh;
   width: 100vw;
   margin: 0;
   padding: 0;
   background-color: pink;
   display: flex;
   flex-direction: column;
}

@font-face {
  font-family: 'Ilisarniq';
  src: local('Ilisarniq'), url(./assets/fonts/Ilisarniq-Light.otf) format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Black';
  src: local('NostromoBlack'), url('./src/assets/fonts/Ilisarniq-Black.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Black-Italic';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-BlackItalic.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Bold';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-Bold.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Bold-Italic';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-BoldItalic.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Demi';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-Demi.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Demi-Italic';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-DemiItalic.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Italic';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-Italic.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Light';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-Light.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Light-Italic';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-LightItalic.otf') format('truetype');
}

@font-face {
  font-family: 'Ilisarniq-Regular';
  src: local('Ilisarniq'), url('./src/assets/fonts/Ilisarniq-Regular.otf') format('truetype');
}

a {
  text-decoration: none;
}

ul {
  padding-inline-start: 0px;
}

li {
  list-style-type: none;
  
}

li:hover{
  cursor: pointer;
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
 
// @font-face {
//   font-family: 'Ilisarniq';
//   src: local('Ilisarniq'), url(./assets/fonts/Ilisarniq-Light.otf) format('truetype');
// }

// .App{
//   font-family: 'Ilisarniq';
//   text-align: center;
//   /* background-color: #3c3c3c;
//   color: #fadde1; */
//   display: flex;
// }

// a {
//   /* color: #fadde1; */
//   text-decoration: none;
// }

// button{
//   font-size: 48px;
//   font-family: 'Ilisarniq';
//   /* border: 3px solid #fadde1;
//   background-color: #3c3c3c; */
//   border-radius: 20px;
//   /* color: #fadde1; */
//   padding: 18px 48px;
//   align-items: center;
//   outline: none;
// }

// button:active{
//   /* background-color:  #fadde1; */
// }

// input, textarea {
//   border-top-style: hidden;
//   border-right-style: hidden;
//   border-left-style: hidden;
//   border-bottom-style: hidden;
//   font-family: 'Ilisarniq';
// }

// textarea{
//   resize: none;
// }

// input:focus, textarea:focus, select:focus {
//   outline: none;
// }

// * {
//   transition: 333ms;
// }

// .fade-appear,
// .fade-enter {
//   opacity: 0;
//   z-index: 1;
// }

// .fade-appear-active,
// .fade-enter.fade-enter-active {
//   opacity: 1;
//   transition: opacity 500ms linear 250ms;
// }

// .fade-exit{
//   opacity: 1;
// }

// .fade-exit.fade-exit-active {
// opacity: 0;
// transition: opacity 250ms linear;
// }

export default GlobalStyle;