import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }

    return (
        <div>
            <div className="navbar-section">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/"><img className='logo-img' src='https://i.ibb.co/myWLX4k/Group-1329.png' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
      <Nav.Link as={Link} to="/event">Event</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/add-event">Add</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/register">
        <Button variant="primary" size="lg">Register</Button>
      </Nav.Link>
      {
        user ? 
        <Button onClick={handleSignOut} variant="secondary" size="lg">{user.displayName}</Button>
      : <Nav.Link as={Link} to="/login">
      <Button variant="secondary" size="lg">Login</Button>
    </Nav.Link>
      }
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Header;