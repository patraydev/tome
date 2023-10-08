import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import EditProfileForm from "../forms/EditProfileForm.jsx";
import Validator from "../components/Validator.jsx";

import {
  usernameValidation,
  colorwayValidation,
} from "../helpers/validation.js";

import "../assets/style/Profile.css";

function Profile({ currentUser, handleUpdateUser, handleLogout }) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
  }, []);

  const hideModal = () => {
    setShow(false);
    history.push("/dashboard");
  };

  const validate = {
    username: usernameValidation,
    foregroundColor: colorwayValidation,
    backgroundColor: colorwayValidation,
  };

  return (
    <Modal show={show} handleClose={hideModal} size="large">
      <div className="profile-container">
        {currentUser ? (
          <Validator validate={validate}>
            <EditProfileForm
              currentUser={currentUser}
              handleUpdateUser={handleUpdateUser}
            />
          </Validator>
        ) : (
          <div>loading...</div>
        )}
        <div className="profile-button-container">
          <Link to={"/"}>
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default Profile;
