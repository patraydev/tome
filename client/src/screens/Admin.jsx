import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Modal from "../components/Modal.jsx";

function Admin({ currentUser, cocktails }) {
  const [pending, setPending] = useState([]);
  const [show, setShow] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
    const programCocktails = cocktails.filter(
      (cocktail) => (cocktail.program = currentUser.program)
    );
    const toDo = programCocktails.filter(
      (cocktail) => cocktail.pending === true
    );
    setPending(toDo);
  }, [cocktails, currentUser]);

  const hideModal = () => {
    setShow(false);
    history.push("/dashboard");
  };

  return (
    <Modal show={show} handleClose={hideModal} size="large">
      <div className="pending-main">
        <h1>{`Pending Requests (${pending.length})`}</h1>
        <div className="pending-container">
          {pending &&
            pending.map((cocktail) => (
              <div className="pending-item">{cocktail.name}</div>
            ))}
        </div>
      </div>
    </Modal>
  );
}

export default Admin;
