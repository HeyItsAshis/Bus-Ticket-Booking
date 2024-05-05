import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cityVillage, setCityVillage] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { name, email, mobileNumber, cityVillage, password });
    // Add your registration logic here
  };

  return (
    <div className="wrapper bg-img p-0 m-0">
      <Container fluid className='p-0 m-0'>
        <Row>
          <Col></Col>
          <Col> 
            <div className='d-flex align-items-center justify-content-center flex-column vh-custom'> 
              <h4 className='text-white'>Register</h4>         
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control type="email" placeholder="Enter email ID" value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter mobile number" value={mobileNumber} 
                        onChange={(e) => setMobileNumber(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicCityVillage">
                      <Form.Label>City/Village</Form.Label>
                      <Form.Control type="text" placeholder="Enter city/village" value={cityVillage} 
                        onChange={(e) => setCityVillage(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit"> Register </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div> 
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
};

export default Register;