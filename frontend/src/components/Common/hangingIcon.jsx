import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HangingIcons = () => {
  return (
    <>
    <Container>
      <h2 className="pb-2  py-5 border-bottom text-center">The Nummber are Growing</h2>
      <Row className="g-6 py-5 row-cols-1 row-cols-lg-4">
        <Col className="d-flex align-items-start">
          <div className='text-center'>
            <img src="route.png" alt="Route cover" />
            <h4 className="fs-2 text-body-emphasis">100+</h4>
            <h5>Routes Covered</h5>
          </div>
        </Col>
        <Col className="d-flex align-items-start">
        <div className='text-center'>
            <img src="bus.png" alt="coonected bus" />
            <h4 className="fs-2 text-body-emphasis">1000+</h4>
            <h5>Buses</h5>
          </div>
        </Col>
        <Col className="d-flex align-items-start">
        <div className='text-center'>
            <img src="customer.png" alt="customber" />
            <h4 className="fs-2 text-body-emphasis">10,00,000 +</h4>
            <h5>sertisfied Customber</h5>
          </div>
        </Col>
        <Col className="d-flex align-items-start">
        <div className='text-center'>
            <img src="service.png" alt="customber srvice" />
            <h4 className="fs-2 text-body-emphasis">24x7</h4>
            <h5>Customber Service</h5>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <h2 className="pb-2  py-5 border-bottom text-center">WHY YOU TRUST US?</h2>
      <Row className="g-6 py-5 row-cols-1 row-cols-lg-3">
        <Col className="d-flex align-items-start">
          <div className='text-center'>
            <img src="service.gif" alt="Route cover" />
            <h4 className="fs-2 text-body-emphasis">SERVICES</h4>
            <h5>We offer the best in class facilities and services for a happy journey </h5>
          </div>
        </Col>
        <Col className="d-flex align-items-start">
        <div className='text-center'>
            <img src="savings.gif" alt="coonected bus" />
            <h4 className="fs-2 text-body-emphasis">POCKET FRIENDLY</h4>
            <h5>Affordable rates to suit every pocket.</h5>
          </div>
        </Col>
        <Col className="d-flex align-items-start">
        <div className='text-center'>
            <img src="price.gif" alt="customber" />
            <h4 className="fs-2 text-body-emphasis">EXCITING OFFERS</h4>
            <h5>We offer unmatched discounts to make your journey more economical</h5>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HangingIcons;