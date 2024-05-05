import React, { useState, useEffect } from 'react';
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../../apiConfig';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(apiUrl + 'doctors/get-all-doctors')
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setDoctors(data.doctors);
                } else {
                    console.error('Failed to fetch doctors:', data.error);
                }
            })
            .catch(error => {
                console.error('Error fetching doctors:', error);
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
                                <h2>Doctors</h2>
                                <Link to="add" className="btn btn-primary btn-sm">+ Add Doctors</Link>
                            </div>
                            
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Specialisation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctors.map(cust => (
                                        <tr key={cust.id}>
                                            <td>{cust.id}</td>
                                            <td>{cust.name}</td>
                                            <td>{cust.phone}</td>
                                            <td>{cust.email}</td>
                                            <td>{cust.gender}</td>
                                            <td>{cust.specialisation}</td>
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

export default Doctors;
