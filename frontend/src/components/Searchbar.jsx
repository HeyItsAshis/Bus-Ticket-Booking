import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, CardBody } from 'react-bootstrap';

const SearchBox = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');

  const handleReverse = () => {
    const temp = leavingFrom;
    setLeavingFrom(goingTo);
    setGoingTo(temp);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="justify-content-center" bg='secondary' text='white'>
          <h4 className="justify-content-center text-center p-2">PLAN YOUR JOURNEY WITH
              THE MOST TRUSTED & SAFEST ONLINE BUS BOOKING PLATFORM</h4>
            <CardBody>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Leaving From</Form.Label>
                  <Form.Control
                    type="text"
                    value={leavingFrom}
                    onChange={(e) => setLeavingFrom(e.target.value)}
                    placeholder="Leaving From"
                  />
                </Form.Group>
                <div className='text-center'>
                <Button variant="primary justify-content-center" onClick={handleReverse}>
                  <i class="bi bi-arrow-down-up"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0.5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1.5.5v11.793l3.146-3.147a.5.5 0 0 1.708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1.708-.708L4 13.293V1.5a.5.5 0 0 1.5-.5"/>
                  </svg>
                </Button>{' '}
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Going To</Form.Label>
                  <Form.Control
                    type="text"
                    value={goingTo}
                    onChange={(e) => setGoingTo(e.target.value)}
                    placeholder="Going To"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <div className='text-center'>
                  <Button variant="primary" className='px-5'>Search</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBox;