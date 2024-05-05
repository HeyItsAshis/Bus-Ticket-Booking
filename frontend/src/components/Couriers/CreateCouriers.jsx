import React, { useState, useEffect } from 'react';
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../../apiConfig';
import { Link, useNavigate } from 'react-router-dom';

const CreateCouriers = () => {
    const [formData, setFormData] = useState({
        courier_number:'',
        price: '',
        location_from: '',
        location_to: '',
        payment_status: '',
        customer_id: '',
        weight: '',
        delivery_status: ''
    });
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

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

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        fetch(apiUrl + 'couriers/create-courier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    console.log('Courier created successfully:', data.message);
                    navigate('/couriers');
                } else {
                    console.error('Failed to create courier:', data.error);
                }
            })
            .catch(error => {
                console.error('Error creating courier:', error);
            });

        setFormData({
            courier_number:'',
            price: '',
            location_from: '',
            location_to: '',
            payment_status: '',
            customer_id: '',
            weight: '',
            delivery_status: ''
        });
    };

    return (
        <div className="wrapper">
            <Header />
            <Container fluid>
                <Row>
                    <Sidebar />
                    <Col>
                        <Row>
                            <Col md={4} className="mx-auto">
                                <div className="content">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h2>Create Courier Request</h2>
                                        <Link to="/couriers" className="btn btn-dark btn-sm">Back to Couriers</Link>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Courier Number:</label>
                                            <input type="text" className="form-control" name="courier_number" value={formData.courier_number} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">From:</label>
                                            <input type="text" className="form-control" name="location_from" value={formData.location_from} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">To:</label>
                                            <input type="text" className="form-control" name="location_to" value={formData.location_to} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Weight:</label>
                                            <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Price:</label>
                                            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Payment Status:</label>
                                            <select className="form-select" name="payment_status" value={formData.payment_status} onChange={handleChange}>
                                                <option value="">Select Payment Status</option>
                                                <option value="paid">Paid</option>
                                                <option value="unpaid">Unpaid</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Customer:</label>
                                            <select className="form-select" name="customer_id" value={formData.customer_id} onChange={handleChange}>
                                                <option value="">Select Customer</option>
                                                {customers.map(customer => (
                                                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Delivery Status:</label>
                                            <select className="form-select" name="delivery_status" value={formData.delivery_status} onChange={handleChange}>
                                                <option value="">Select Delivery Status</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="In-transit">In-transit</option>
                                                <option value="Parcel Recieved">Parcel Recieved</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateCouriers;
