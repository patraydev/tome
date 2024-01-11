import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import EditProfileForm from "../forms/EditProfileForm.jsx";
import Validator from "../components/Validator.jsx";
import { Container } from "../styled/Container.js";
import { Button } from "../styled/Buttons.js";


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
    <Modal show={show} handleClose={hideModal} size="small">
      <Container>
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
        <Container>
          <Link to={"/"}>
            <Button onClick={handleLogout}>Logout</Button>
          </Link>
        </Container>
      </Container>
    </Modal>
  );
}

export default Profile;
