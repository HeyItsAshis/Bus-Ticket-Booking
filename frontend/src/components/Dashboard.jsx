import React, { useState, useEffect } from 'react';
import Sidebar from "./Common/Sidebar";
import Header from "./Common/Header";
import Col from "react-bootstrap/esm/Col";
import { Card } from 'react-bootstrap';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../apiConfig';

const Dashboard = () => {
    const [couriersCount, setCouriersCount] = useState({ totalCount: 0, todayCount: 0 });

    useEffect(() => {
        fetch(apiUrl + 'appointments/count-appointments')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setCouriersCount({
                        totalCount: data.totalCount,
                        todayCount: data.todayCount
                    });
                } else {
                    // Handle error response if needed
                    console.error('Failed to fetch event counts:', data.error);
                }
            })
            .catch(error => {
                console.error('Error fetching event counts:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="wrapper">
        <Header />
        <Container fluid>
            <Row>
                <Sidebar />
                <Col>
                    <div className="content">
                        <Row>
                            <Col className='mt-2'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Couriers:</Card.Title>
                                        <Card.Text>
                                            <h1> {couriersCount.totalCount}</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='mt-2'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Today Couriers:</Card.Title>
                                        <Card.Text>
                                            <h1>{couriersCount.todayCount}</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default Dashboard;
