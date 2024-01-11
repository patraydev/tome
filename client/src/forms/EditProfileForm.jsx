import { useState } from "react";

import { Form, Input, ColorInput, Label, Title } from "../styled/Forms";
import { Container } from "../styled/Container";
import { Button } from "../styled/Buttons";


export default function EditProfileForm(props) {


  const {
    currentUser,
    handleUpdateUser,
     } = props;

    const [userData, setUserData] = useState({
      username: currentUser.username,
      foregroundColor: currentUser.foregroundColor,
      backgroundColor: currentUser.backgroundColor,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleUpdateUser(currentUser._id, userData)
    }
  
    return (
      <Container>
        <Title>Edit Profile</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="change-username">Change Username
          <Input
            name="username"
            type="text"
            placeholder="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="foreground-color">Foreground Color
          <ColorInput
            name="foregroundColor"
            type="color"
            value={userData.foregroundColor}
            onChange={handleChange}
            required
            />
          </Label>
          <Label htmlFor="background-color">Background Color
          <ColorInput
            name="backgroundColor"
            type="color"
            value={userData.backgroundColor}
              onChange={handleChange}
              required
            />
          </Label>
          <Button onClick={handleSubmit}>Save</Button>
        </Form>
      </Container>
    );
  }