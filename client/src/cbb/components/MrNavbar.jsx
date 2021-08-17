import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown }  from 'react-bootstrap';


import logo from '../images/cthulhu.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function MrNavbar(props) {
const [] = useState();
useEffect(() => {

},[]);

  return (
    <div>
  <Navbar bg="dark" variant='dark'>
  <Navbar.Brand as={Link} to='/home'>
      <img
        alt="super cool logo"
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      cocktail build beautifier
    </Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavDropdown title="Magic" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to='/beatuifier'>Beautify</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/edit'>Edit</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/progress'>Progress Report</NavDropdown.Item>
      </NavDropdown>
            <Nav.Link as={Link } to='/about'>What fresh hell is this?</Nav.Link>
      <Nav.Link as={Link } to='/contact'>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
  </Navbar>
  </div>
);
};

export default MrNavbar