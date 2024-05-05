import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const Contact = () => {
 
  return (
    <>
    <NavigationBar  className="container-fluid p-0"/>
    <Container>
    <Card className="justify-content-center p-0" bg='dark' text='white'>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Contact Us</h1>
          <p> Most of your questions will be answered by referring to the FAQ`s 
          If you still have questions get in contact with us. 
          We will make sure your questions are answered.. </p>
          
            <h4>Email</h4>
            <p>
              <p>support-safar@gmailco</p>
            </p>
            <h4>Phone</h4>
            <p>
              06758-255-270
              +91 7549464456
            </p>
            <h4>Address</h4>
            <p>
              Koelnage, Rourkela Odisha - 769014 
            </p>
             <h4>Map</h4>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105301.25628817086!2d84.631859730765!3d22.215569175591444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20199b4c94c2a5%3A0xb4a4e62e77879624!2sRourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1714706010789!5m2!1sen!2sin" width="100%"frameborder="0"></iframe>
             <h4>Social Media</h4>
            <p> Avaible Soon</p>
        </Col>
      </Row>
      </Card>
    </Container>
    </>
  );
};

export default Contact;