import { Link } from "react-router-dom";

import { useState } from "react";

import Modal from '../components/Modal.jsx';

function Dashboard(props) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="dashboard-main">
      <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
        </Modal>
      <button onClick={showModal}>login</button>
    </div>
  );
}

export default Dashboard;
