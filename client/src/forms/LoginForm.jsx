import { useState } from 'react';
import "../assets/style/LoginForm.css";

import { Form, AuthInput, Label } from '../styled/Forms';
import { LoginButton } from '../styled/Buttons';
import { Container } from '../styled/Container';

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
    <Container>
      <Form onSubmit={handleSubmit}>
        
        <Label htmlFor="email-input">
        <AuthInput
          name="email"
          type="text"
          placeholder="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          {touched.email && errors.email}
        </Label>
        <Label htmlFor="password">
        <AuthInput
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.password && errors.password}
        </Label>
        <Container>
        <span>{submitError}</span>
          <LoginButton type="submit">Login</LoginButton>
          <div className='links'><span className='link' onClick={showModalPasswordReset}>forgot password?</span> or <span className='link' onClick={handleRegRedirect}>don't have an account?</span></div>
        </Container>
      </Form>
    </Container>
  );
}
