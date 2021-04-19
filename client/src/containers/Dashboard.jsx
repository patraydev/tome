import { useState } from "react";
import { Route } from 'react-router-dom';

import Modal from "../components/Modal.jsx";
import Validator from "../components/Validator.jsx";
import LoginForm from "../forms/LoginForm.jsx";
import RegisterForm from "../forms/RegisterForm.jsx";
import SendPasswordResetForm from '../forms/SendPasswordResetForm.jsx';
import ConfirmPasswordResetForm from '../forms/ConfirmPasswordResetForm.jsx';

import "../assets/style/Dashboard.css";

import circle from "../assets/images/ward.png";

function Dashboard(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const { handleLogin, handleRegister} = props;

  const showModalLogin = () => {
    setShowLogin(true);
  };

  const hideModalLogin = () => {
    setShowLogin(false);
  };

  const showModalRegister = () => {
    setShowRegister(true);
  };

  const hideModalRegister = () => {
    setShowRegister(false);
  };

  const showModalPasswordReset = () => {
    setShowPasswordReset(true);
  };

  const hideModalPasswordReset = () => {
    setShowPasswordReset(false);
  };

  const passwordValidation = (name) => {
    if (name.trim() === "") {
      return "Please enter a password";
    }
    return null;
  };

  const emailValidation = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  };

  const validate = {
    email: emailValidation,
    password: passwordValidation,
  };

  return (
    <div className="dashboard-main">
      <Modal show={showLogin} handleClose={hideModalLogin} size="small">
        <Validator validate={validate}>
          <LoginForm
            handleLogin={handleLogin}
            showModalRegister={showModalRegister}
            showModalPasswordReset={showModalPasswordReset}
            hideModal={hideModalLogin}
          />
        </Validator>
      </Modal>
      <Modal show={showRegister} handleClose={hideModalRegister} size="small">
        <Validator validate={validate}>
          <RegisterForm handleRegister={handleRegister} />
        </Validator>
      </Modal>
      <Modal show={showPasswordReset} handleClose={hideModalPasswordReset} size="small">
        <Validator validate={validate}>
          <SendPasswordResetForm
            showModalRegister={showModalRegister}
            hideModal={hideModalPasswordReset}
          />
          </Validator>
      </Modal>
      <Route path='/reset-confirm/:token'>
        <Validator validate={validate}>
          <ConfirmPasswordResetForm/>
        </Validator>
      </Route>
      {/* <div className='center-attempt'> */}
      <button className="login-button" onClick={showModalLogin}>
        login
      </button>
      {/* </div> */}
      <img src={circle} className="weird-circle" alt="weird spinny circle" />
    </div>
  );
}

export default Dashboard;
