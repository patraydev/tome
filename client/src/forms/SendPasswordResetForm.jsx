// import "../assets/style/PasswordResetForm.css";

import {sendPasswordReset} from "../helpers/reset.js";

export default function SendPasswordResetForm(props) {

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
          <button type="submit">send reset link</button>
        </div>
          <div className='links'><span className='link' onClick={handleRegisterRedirect}>don't have an account?</span></div>
      </form>
    </div>
  );
}
