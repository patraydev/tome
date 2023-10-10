import { CSSTransition } from "react-transition-group";
import "../assets/style/Modal.css";
import { ModalContainer, ModalButton } from '../styled/Modal.js';

function Modal({ handleClose, show, children, size, currentUser }) {
  return (
    <CSSTransition in={show} unmountOnExit timeout={500} classNames="fade">
      <ModalContainer size={size} currentUser={currentUser}>
          <ModalButton close onClick={handleClose} currentUser={currentUser}>
            X
        </ModalButton>
          {children}
          </ModalContainer>
    </CSSTransition>
  );
}

export default Modal;
