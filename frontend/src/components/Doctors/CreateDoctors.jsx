import React, { useState } from 'react';
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import apiUrl from '../../apiConfig';
import { Link,useNavigate } from 'react-router-dom';

const CreateDoctors = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        gender: '',
        specialisation: '',
    });

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
    
        fetch(apiUrl + 'doctors/create-doctor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                console.log('Doctor created successfully:', data.message);
                navigate('/doctors');
            } else {
                console.error('Failed to create doctor:', data.error);
                // Optionally, you can show an error message to the user
            }
        })
        .catch(error => {
            console.error('Error creating doctor:', error);
            // Optionally, you can show an error message to the user
        });
    
        // Clear form fields after submission
        setFormData({
            name: '',
            phone: '',
            email: '',
            gender: '',
            specialisation: '',
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
                                <div className="d-flex align-items-center justify-content-between">
                                    <h2 className='mt-3'>Add Doctor</h2>
                                    <Link to="/Customers" className="btn btn-primary btn-sm"> Back to Doctors</Link>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Doctor Name:</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Specialisation:</label>
                                        <input type="text" className="form-control" name="specialisation" value={formData.specialisation} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone:</label>
                                        <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email:</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Gender:</label>
                                        <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Doctor</button>
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

export default CreateDoctors;
