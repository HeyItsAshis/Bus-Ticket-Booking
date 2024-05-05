import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
const FaqList = () => {
    return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I book a ticket?</Accordion.Header>
              <Accordion.Body>
                To book a ticket, simply enter your departure and arrival cities, select your preferred bus, and enter your personal details. You can pay for your ticket using a credit/debit card or netbanking.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is name change and gender change permissible?</Accordion.Header>
              <Accordion.Body>
              No, name change or gender change is not allowed. In case of changes, it is to be cancelled and go for fresh booking.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Does booking online cost me more?</Accordion.Header>
              <Accordion.Body>
                Not at all! The price of the bus ticket is the same as you would get from the bus operator too.The price of a bus ticket is the same or sometimes discounted depending on the season/time.
              </Accordion.Body>
            </Accordion.Item><Accordion.Item eventKey="3">
              <Accordion.Header>I am travelling with a child. Do I need to purchase a bus ticket for the child?</Accordion.Header>
              <Accordion.Body>
              There will be no charges for children below 2 years of age. They will not be given a seat and will have to travel on an adult's lap/seat. For children over 2 years of age, a full ticket will need to be purchased.
              </Accordion.Body>
            </Accordion.Item><Accordion.Item eventKey="4">
              <Accordion.Header>Does booking online cost me more?</Accordion.Header>
              <Accordion.Body>
                Not at all! The price of the bus ticket is the same as you would get from the bus operator too.The price of a bus ticket is the same or sometimes discounted depending on the season/time.
              </Accordion.Body>
              </Accordion.Item><Accordion.Item eventKey="5">
              <Accordion.Header>Can I cancel my ticket online?</Accordion.Header>
              <Accordion.Body>
              Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our support team or call center.

                However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>How do I contact customer support?</Accordion.Header>
              <Accordion.Body>
                You can contact our customer support team by email at [safarsupport@gmail.com](mailto:safarsupport@gmail.com) or by phone at +1 (91) 8984898878. Our customer support team is available 24/7 to assist you with any questions or concerns.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
    );
}

export default FaqList;