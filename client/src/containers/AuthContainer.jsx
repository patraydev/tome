import { useState, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom';

import Modal from "../components/Modal.jsx";
import Validator from "../components/Validator.jsx";
import LoginForm from "../forms/LoginForm.jsx";
import RegisterForm from "../forms/RegisterForm.jsx";
import SendPasswordResetForm from '../forms/SendPasswordResetForm.jsx';
import ConfirmPasswordResetForm from '../forms/ConfirmPasswordResetForm.jsx';

import { emailValidation, passwordValidation } from '../helpers/validation.js';

import { Container } from "../styled/Container.js";
import { LoginButton } from "../styled/Buttons.js";
import { WeirdCircle } from "../styled/WeirdCircle.js";

import ward from "../assets/images/ward.png";

function AuthContainer(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const { handleLogin, handleRegister } = props;
  const history = useHistory();

  useEffect(() => {
    if (props.currentUser) {
      history.push('/dashboard');
    }
  }, [props.currentUser]);

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
    <Container currentUser={props.currentUser} thisone={true}>
      <Modal show={showLogin} handleClose={hideModalLogin} size="small" color="#fadde1">
        <Validator validate={validate}>
          <LoginForm
            handleLogin={handleLogin}
            showModalRegister={showModalRegister}
            showModalPasswordReset={showModalPasswordReset}
            hideModal={hideModalLogin}
          />
        </Validator>
      </Modal>
      <Modal show={showRegister} handleClose={hideModalRegister} size="small" color="#fadde1">
        <Validator validate={validate}>
          <RegisterForm handleRegister={handleRegister} />
        </Validator>
      </Modal>
      <Modal show={showPasswordReset} handleClose={hideModalPasswordReset} size="small" color="#fadde1">
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
      <LoginButton onClick={showModalLogin}>
        login
      </LoginButton>
      <WeirdCircle src={ward}/>
    </Container>
  );
}

export default AuthContainer;
