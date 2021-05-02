import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import EditProfileForm from "../forms/EditProfileForm.jsx";
import Validator from '../components/Validator.jsx';

import { usernameValidation } from '../helpers/validation.js';

import '../assets/style/Profile.css';

function Profile(currentUser, handleUpdateUser, handleLogout) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
  }, []);

  const hideModal = () => {
    setShow(false);
    history.push("/cocktails");
  };

  const validate = {
    username: usernameValidation,
    // colorway: colorwayValidation,
  };

  return (
    <Modal show={show} handleClose={hideModal} size="large">
      <div className='profile-container'>
      {currentUser ? (
          <Validator validate={validate}>
            <EditProfileForm/>
        </Validator>
      ) : (
        <div>loading...</div>
        )}
        <div className='profile-button-container'>
          <button>Save</button>
      <Link to={"/"}>
        <button onClick={handleLogout}>Logout</button>
          </Link>
          </div>
        </div>
    </Modal>
  );
}

export default Profile;
