import { useState } from 'react';
import "../assets/style/LoginForm.css";

export default function LoginForm(props) {
  const [submitError, setSubmitError] = useState("");

  const { handleLogin,
    hideModal,
    showModalRegister,
    showModalPasswordReset,
    errors,
    handleBlur,
    handleChange,
    validateSubmit,
    touched,
    values, } = props;


  const handleRegRedirect = () => {
    hideModal();
    showModalRegister();
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit()) handleLogin(values).then(
    setSubmitError("Incorrect login credentials. Please try again"));
  }


  return (
    <div className="auth-container">
      <h2>login</h2>
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
        <span>{submitError}</span>
          <button type="submit">Login</button>
          <div className='links'><span className='link' onClick={showModalPasswordReset}>forgot password?</span> or <span className='link' onClick={handleRegRedirect}>don't have an account?</span></div>
        </div>
      </form>
    </div>
  );
}
