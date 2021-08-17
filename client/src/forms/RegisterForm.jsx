export default function RegisterForm(props) {
  const {
    handleRegister,
    errors,
    handleBlur,
    handleChange,
    validateSubmit,
    touched,
    values,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSubmit) handleRegister(values);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
