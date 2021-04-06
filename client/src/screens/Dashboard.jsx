import { useState } from "react";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Modal from "../components/Modal.jsx";

import circle from "../assets/images/ward.png";

import "../assets/style/Dashboard.css";

function Dashboard(props) {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { handleLogin,handleRegister } = props;

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showModalRegister = () => {
    setShowRegister(true);
  };

  const hideModalRegister = () => {
    setShowRegister(false);
  };

  return (
    <div className="dashboard-main">
      <Modal show={show} handleClose={hideModal} size="small">
        <Login handleLogin={handleLogin} showModalRegister={showModalRegister} hideModal={hideModal}/>
      </Modal>
      <Modal show={showRegister} handleClose={hideModalRegister} size="small">
        <Register handleRegister={handleRegister}/>
      </Modal>
      <button onClick={showModal}>login</button>
      <img src={circle} className="weird-circle" alt="weird spinny circle" />
    </div>
  );
}

export default Dashboard;
