import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center mb-4">Payment</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Netbanking</option>
                <option value="upi">UPI</option>
              </Form.Select>
            </Form.Group>
            {paymentMethod === 'card' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter card number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control type="text" placeholder="Name on card" />
                </Form.Group>
              </>
            )}
            {paymentMethod === 'netbanking' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Bank</Form.Label>
                  <Form.Select>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter account number" />
                </Form.Group>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>UPI ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter UPI ID" />
                </Form.Group>
              </>
            )}
            <Button variant="primary" type="submit">
              Pay Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;