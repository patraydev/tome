import styled, { keyframes } from "styled-components";
import circle from "../assets/images/ward.png";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
}
  `;

export const WeirdCircle = styled.img`
  
  /* width: 56vw;
  height: 66vh; */
  /* width: 66vw;
  height: 85vh; */
  /* background-image: url(${circle});
  background-size: cover; */
  /* src: url(${circle}); */
  pointer-events: none;
  max-width: 80vw;
  max-height: 100vh;
  overflow: visible;
  position: fixed;
  top: 3%;
  z-index: 0;
  animation: ${rotation} 666s infinite linear;
  /* border: 1px solid hotpink; */
`;
