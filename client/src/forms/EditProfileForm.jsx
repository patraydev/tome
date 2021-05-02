import '../assets/style/EditProfileForm.css';

export default function EditProfileForm(props) {

  const {
    handleUpdateProfile,
    errors,
    handleBlur,
    handleChange,
    validateSubmit,
    touched,
    values, } = props;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateSubmit()) handleUpdateProfile(values)
    }
  
    return (
      <div className="profile-edit-container">
        <div className='profile-edit-title'>Edit Profile</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username-input">
          <input
            name="username"
            type="text"
            placeholder="username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            {touched.username && errors.username}
          </label>
          <label htmlFor="foreground-color">Foreground
          <input
            name="foregroundColor"
            type="color"
            value={values.foregroundColor}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password}
          </label>
          <label htmlFor="background-color">Background
          <input
            name="backgroundColor"
            type="color"
            value={values.backgroundColor}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password}
          </label>
        </form>
      </div>
    );
  }