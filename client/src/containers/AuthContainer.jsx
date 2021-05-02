import { useState } from "react";
import { Route } from 'react-router-dom';

import Modal from "../components/Modal.jsx";
import Validator from "../components/Validator.jsx";
import LoginForm from "../forms/LoginForm.jsx";
import RegisterForm from "../forms/RegisterForm.jsx";
import SendPasswordResetForm from '../forms/SendPasswordResetForm.jsx';
import ConfirmPasswordResetForm from '../forms/ConfirmPasswordResetForm.jsx';

import { emailValidation, passwordValidation } from '../helpers/validation.js';

import "../assets/style/AuthContainer.css";

import circle from "../assets/images/ward.png";

function AuthContainer(props) {
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

  const validate = {
    email: emailValidation,
    password: passwordValidation,
  };

  return (
    <div className="auth-main">
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
      <button className="login-button" onClick={showModalLogin}>
        login
      </button>
      <img src={circle} className="weird-circle" alt="weird spinny circle" />
    </div>
  );
}

export default AuthContainer;
