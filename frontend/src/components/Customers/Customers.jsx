import React, { useState, useEffect } from 'react';
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../../apiConfig';
import { Link } from 'react-router-dom';

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(apiUrl + 'customers/get-all-customers')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setCustomers(data.customers);
                } else {
                    console.error('Failed to fetch customers:', data.error);
                }
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
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
                                <h2>Patients</h2>
                                <Link to="add" className="btn btn-primary btn-sm">+ Add Patients</Link>
                            </div>
                            
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map(cust => (
                                        <tr key={cust.id}>
                                            <td>{cust.id}</td>
                                            <td>{cust.name}</td>
                                            <td>{cust.address}</td>
                                            <td>{cust.city}</td>
                                            <td>{cust.state}</td>
                                            <td>{cust.phone}</td>
                                            <td>{cust.email}</td>
                                            <td>{cust.gender}</td>
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

export default Customers;
