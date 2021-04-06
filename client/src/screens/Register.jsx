import { useState } from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} >
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
          <button>Register</button>
          </div>
      </form>
    </div>
  )
}