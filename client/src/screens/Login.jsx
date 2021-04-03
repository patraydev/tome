import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/Login.css';

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container" >
      <h2>login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <label>
          Username:
            <input
            name="email"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
        <Link to="/register"><button>Register</button></Link>
      </form>
    </div>
  )
}
