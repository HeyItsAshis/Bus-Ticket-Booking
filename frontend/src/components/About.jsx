import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () => {
  return (
    <Container fluid className='p-5 m-3'>
      <Row>
        <Col md={6}>
        <img src="Redseats.jpg" alt="About"  height={"400"}/>
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>Odisha's first ever online bus ticket booking platform that aims to offer a great level of convenience and reliability. With SAFAR,
           you will be able to get rid of the long queues on bus stations or jammed streets to book the bus tickets. We are the most 
           reliable online portal, where you will be able to book bus tickets directly from the major bus operators (over 1000 bus operators) 
           for all the routes in Odisha and surrounding States.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;