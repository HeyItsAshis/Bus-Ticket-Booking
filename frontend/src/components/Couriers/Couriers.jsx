import React, { useState, useEffect } from 'react';
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../../apiConfig';
import { Link } from 'react-router-dom';

const Couriers = () => {
    const [couriers, setCouriers] = useState([]);

    useEffect(() => {
        fetch(apiUrl + 'couriers/get-all-couriers')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setCouriers(data.couriers);
                } else {
                    console.error('Failed to fetch couriers:', data.error);
                }
            })
            .catch(error => {
                console.error('Error fetching couriers:', error);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <Container fluid>
                <Row>
                    <Sidebar />
                    <Col>
                        <div className="content">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Couriers</h2>
                                <Link to="add" className="btn btn-dark btn-sm">+ Add Courier</Link>
                            </div>
                            
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Courier Number</th>
                                        <th>Customer</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Payment Status</th>
                                        <th>Delivery Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {couriers.map(courier => (
                                        <tr key={courier.id}>
                                            <td>{courier.courier_number}</td>
                                            <td>{courier.customer}</td>
                                            <td>{courier.location_from}</td>
                                            <td>{courier.location_to}</td>
                                            <td>{courier.weight}</td>
                                            <td>₹{courier.price}/-</td>
                                            <td>{courier.payment_status}</td>
                                            <td>{courier.delivery_status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Couriers;
