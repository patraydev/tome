import { useParams, useHistory } from "react-router-dom";
import { useState } from 'react';

// import "../assets/style/ConfirmPasswordResetForm.css";

import Modal from '../components/Modal.jsx';

import {confirmPasswordReset} from "../helpers/reset.js";

export default function ConfirmPasswordResetForm(props) {
  const { token } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(true);

  const {
    errors,
    handleBlur,
    handleChange,
    validateSubmit,
    touched,
    values, } = props;


    const hideModal = () => {
      setShow(false);
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateSubmit()) {
      const resetData = { ...values, token: token };
      confirmPasswordReset(resetData);
      history.push('/');
    }
  }


  return (
    <Modal size="small" show={show} handleClose={hideModal}>
    <div className="auth-container">
      <h2>reset password</h2>
      <form onSubmit={handleSubmit}>
        
      <label htmlFor="password">
        <input
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.password && errors.password}
        </label>
        <div className="button-container">
          <button type="submit">Change Password</button>
        </div>
      </form>
      </div>
      </Modal>
  );
}
