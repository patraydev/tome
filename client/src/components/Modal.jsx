import { CSSTransition } from "react-transition-group";
import "../assets/style/Modal.css";
import { ModalContainer, ModalButton } from '../styled/Modal.js';

function Modal({ handleClose, show, children, size, color }) {
  return (
    <CSSTransition in={show} unmountOnExit timeout={500} classNames="fade">
      <ModalContainer size={size} color={color}>
          <ModalButton close onClick={handleClose}  color={color}>
            X
        </ModalButton>
          {children}
          </ModalContainer>
    </CSSTransition>
  );
}

export default Modal;
