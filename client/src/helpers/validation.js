// import validateColor from 'validate-color';

export const passwordValidation = (name) => {
  if (name.trim() === "") {
    return "Please enter a password";
  }
  return null;
};

export const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

export const usernameValidation = (username) => {
  if (username.trim() === "") {
    return "Username is required";
  }
  if (username.length > 12) {
    return "Username must be less than 12 characters";
  }
  return null;
};

export const colorwayValidation = (colorway) => {
  return null;
};
//   if (validateColor(colorway[0]) && validateColor(colorway[1])) {
//     return null;
//   }
//   return "Colors must be valid colors";
// }
