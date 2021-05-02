import { CSSTransition } from "react-transition-group";
import "../assets/style/Modal.css";

function Modal({ handleClose, show, children, size }) {
  return (
    <CSSTransition in={show} unmountOnExit timeout={500} classNames="fade">
        <section className={`modal-main ${size}`}>
          <button type="button" onClick={handleClose} className="close-button">
            X
          </button>
          {children}
        </section>
    </CSSTransition>
  );
}

export default Modal;
