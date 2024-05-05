const connection = require('../connection.js');
// const moment = require('moment');

const CustomerController = {
    getAllCustomers: (req, res) => {
        const query = 'SELECT * FROM customer_tbl';
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }
            return res.status(200).json({ status: true, customers: results });
        });
    },
    createCustomer: (req, res) => {
        const custData = req.body;    
        const query = 'INSERT INTO customer_tbl (name, address, city, state, phone, email, gender) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [custData.name, custData.address, custData.city, custData.state, custData.phone, custData.email, custData.gender];
    
        connection.query(query, values, (error, result) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }

            return res.status(201).json({ status: true, message: 'Customer created successfully' });
        });
    },    
    getCustomerById: (req, res) => {
      // Implement logic to fetch a customer by ID from the database
    },
    updateCustomer: (req, res) => {
      // Implement logic to update a customer in the database
    },
    deleteCustomer: (req, res) => {
      // Implement logic to delete a customer from the database
    }
  };
  
  module.exports = CustomerController;