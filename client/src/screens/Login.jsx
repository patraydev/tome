import { useState } from "react";

import "../assets/style/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { handleLogin,hideModal,showModalRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegRedirect = () => {
    hideModal();
    showModalRegister();
}


  return (
    <div className="auth-container">
      <h2>login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />

        <div className="button-container">
          <button type="submit">Login</button>
          <button onClick={handleRegRedirect}>Register</button>
        </div>
      </form>
    </div>
  );
}
