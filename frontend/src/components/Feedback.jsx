import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal,Card } from 'react-bootstrap';

const Feedback = () => {
  const [show, setShow] = useState(false);
  const [quality, setQuality] = useState('');
  const [service, setService] = useState('');
  const [comfort, setComfort] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleQualityChange = (e) => {
    setQuality(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleComfortChange = (e) => {
    setComfort(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data to the server
    const feedbackData = { quality, service, comfort, feedback, rating };
    console.log(feedbackData);
    // Clear feedback form
    setQuality('');
    setService('');
    setComfort('');
    setFeedback('');
    setRating(0);
    // Show popup message
    setShow(true);
  };

  return (
    <>
    <Card className="justify-content-center mt-5" bg= 'secondary' text='white' with="70%" >
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h1 className="text-center mb-4">Feedback</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
              <Form.Label>Name the Bus</Form.Label>
              <Form.Select value={quality} onChange={handleQualityChange}>
                <option value="">Select Bus</option>
                <option value="Galaxy">Galaxy</option>
                <option value="Chandrakanti">Chandrakanti (Winner)</option>
                <option value="Mahadev">Mahadev</option>
                <option value="Dildar">Dildar</option>
                <option value="OSRTC">OSRTC ROU-BBSR</option>
                <option value="Bus1">Rudra</option>
                <option value="Bus2">Ori Bus</option>
                <option value="Bus3">Pradhan</option>
                <option value="Bus4">Black bus</option>
              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Service</Form.Label>
                <Form.Select value={service} onChange={handleServiceChange}>
                  <option value="">Select service</option>
                  <option value="very-good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="normal">Normal</option>
                  <option value="not-good">Not Good</option>
                  <option value="worst">Worst</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comfort</Form.Label>
                <Form.Select value={comfort} onChange={handleComfortChange}>
                  <option value="">Select comfort</option>
                  <option value="very-good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="normal">Normal</option>
                  <option value="not-good">Not Good</option>
                  <option value="worst">Worst</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Share your feedback to improve our service</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Star Rating of the Bus</Form.Label>
                <Form.Select value={rating} onChange={handleRatingChange}>
                  <option value="0">Select rating</option>
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5">5 stars</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your valuable feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We appreciate your feedback and will use it to improve our service.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" href="/">
            Go to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    </>
  );
};

export default Feedback;