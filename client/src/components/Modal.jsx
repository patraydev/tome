import '../assets/style/Modal.css';


function Modal({ handleClose, show, children, size }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className={`modal-main ${size}`}>
      <button type="button" onClick={handleClose} className='close-button'>
        X
      </button>
      {children}
    </section>
  </div>
);
};

export default Modal