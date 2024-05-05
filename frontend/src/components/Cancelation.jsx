import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const Cancelation = () => {
  const [seatNumber, setSeatNumber] = useState('');
  const [name, setName] = useState('');
  const [refundAmount, setRefundAmount] = useState(0);
  const [busOptions, setBusOptions] = useState([
    { value: 'bus1', label: 'Bus 1' },
    { value: 'bus2', label: 'Bus 2' },
    { value: 'bus3', label: 'Bus 3' },
  ]);
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  

  const handleSeatNumberChange = (e) => {
    setSeatNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBusChange = (e) => {
    const selectedBus = busOptions.find(
      (bus) => bus.value === e.target.value
    );
    setSelectedBus(selectedBus);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleCancelTicket = () => {
    // Send cancellation request to the server
    const cancellationData = { seatNumber, name, bus: selectedBus, date: selectedDate };
    console.log(cancellationData);
    // Calculate refund amount
    const refundAmount = calculateRefundAmount(cancellationData);
    setRefundAmount(refundAmount);
  };
  const calculateRefundAmount = (cancellationData) => {
    // Calculate refund amount based on the cancellation data
    // For example purposes, let's assume that the refund amount is 60% of the ticket price
    const ticketPrice = 100;
    return ticketPrice * 0.6;
  };

  return (
    <>
    <div className="body bg-img">
    <NavigationBar/>
    <Container>
      <Row className="justify-content-center mt-5">
      <Col></Col>
        <Col>
          <h1 className="text-center mb-4">Ticket Cancellation</h1>
          <Form>
            
            <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
              />
              <Form.Group className="mt-4">
              <Form.Label>PNR Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PNR number"
                value={seatNumber}
                onChange={handleSeatNumberChange}
              />
            </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bus</Form.Label>
              <Form.Select
                value={selectedBus.value}
                onChange={handleBusChange}
              >
                {busOptions.map((bus) => (
                  <option key={bus.value} value={bus.value}>
                    {bus.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Form.Group>
            <div className='text-center'>
            <Button variant="primary mb-3" onClick={handleCancelTicket}>
              Cancel Ticket
            </Button>
            {refundAmount > 0 && (
              <p className="mt-3">
                Refund Amount: Rs{refundAmount}
              </p>
            )}
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
    </>
    
  );
};

export default Cancelation;