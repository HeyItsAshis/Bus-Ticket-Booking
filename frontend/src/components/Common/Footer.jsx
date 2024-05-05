import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className='bg-dark p-5' fluid>
      <Row>
        <Col md={4}>
          <h4 className='text-white'>SAFAR</h4>
          <p className="text-secondary">This is the Odisha's best and largest online bus ticket booking service provider trusted by over thousands happy customers and hundred of bus operator. Anyone can book bus ticket booking through our website for all major routes in Odisha and other surrounded states.</p>

        </Col>
        <Col md={4}>
          <h5 className='text-white'>Features</h5>
          <Nav className="flex-column">
            <NavItem>
              <NavLink href="/" className="nav-link p-0 text-white">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="nav-link p-0 text-white">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="nav-link p-0 text-white">Buses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FAQ" className="nav-link p-0 text-white">FAQs</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md={4}>
        <h5 className="text-white">ABOUT US</h5>
          <Nav className="flex-column">
          <NavItem>
              <NavLink href="/About" className="nav-link p-0 text-white">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="nav-link p-0 text-white">Career</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="nav-link p-0 text-white">Privecy Police</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="nav-link p-0 text-white">Terms and Conditions</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5'>
          <p className='text-white'>&copy; All rights reserved 2024</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;