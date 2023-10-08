import { useState, useEffect } from "react";
import { Form, Button,Row } from 'react-bootstrap';

function Contact(props) {
const [] = useState();
useEffect(() => {

},[]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-6 my-5'>
    <Form>
    <Form.Group as={Row} controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>
      <Form.Group as={Row} controlId="contactForm.ControlTextarea1">
    <Form.Label>What's up?</Form.Label>
    <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group as={Row}>
    <Form.File id="contactFormControlFile1" label="A screenshot or the file you're having trouble with may help" />
  </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button>
          </Form>
          </div>
        <div className='col'></div>
        </div>
      </div>
);
};

export default Contact;