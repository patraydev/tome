// import "../assets/style/PasswordResetForm.css";
import { useState } from 'react';

import {sendPasswordReset} from "../helpers/reset.js";

export default function SendPasswordResetForm(props) {
  const [sentMessage, setSentMessage] = useState("");

  const {
    hideModal,
    showModalRegister,
    errors,
    handleBlur,
    handleChange,
    validateSubmit,
    touched,
    values, } = props;


  const handleRegisterRedirect = () => {
    hideModal();
    showModalRegister();
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit()) sendPasswordReset(values);
    setSentMessage("Success! If email is registered, a reset link has been sent");
  }


  return (
    <div className="auth-container">
      <h2>reset password</h2>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email-input">
        <input
          name="email"
          type="text"
          placeholder="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          {touched.email && errors.email}
        </label>
        <div className="button-container">
        <span>{sentMessage}</span>
          <button type="submit">send reset link</button>
          <div className='links'><span className='link' onClick={handleRegisterRedirect}>don't have an account?</span></div>
        </div>
      </form>
    </div>
  );
}
