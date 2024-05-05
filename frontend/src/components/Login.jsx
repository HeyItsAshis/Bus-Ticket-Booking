import React, { useState } from 'react';
import { connect,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { login } from '../authActions';
import apiUrl from '../apiConfig';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl + 'users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const userData = await response.json();
                if (userData.status) {
                    dispatch(login(userData)); 
                    navigate("/dashboard");
                } else {
                    console.error('Authentication failed');
                }
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="wrapper bg-img p-0 m-0">
            <Container fluid className='p-0 m-0'>
                <Row>
                    <Col></Col>
                    <Col> 
                        <div className='d-flex align-items-center justify-content-center flex-column vh-custom'>  
                            <h4 className='text-white'>Login</h4>         
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    {/* <Card.Title>Login</Card.Title> */}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={email} 
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={password} 
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit"> Login </Button>
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
}

const mapDispatchToProps = {
    login
};

export default connect(null, mapDispatchToProps)(Login);
