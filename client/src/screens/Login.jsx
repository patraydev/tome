import { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/style/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          value={username}
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
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
