const connection = require('../connection.js');
const moment = require('moment');

const CouriersController = {
    getAllCouriers: (req, res) => {
        const query = 'SELECT cou.*, cust.name as customer FROM `couriers_tbl` cou INNER JOIN `customer_tbl` cust ON cou.customer_id = cust.id;';
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }
            return res.status(200).json({ status: true, couriers: results });
        });
    },
    getDeliveredCouriers: (req, res) => {
        const query = 'SELECT cou.*, cust.name FROM `couriers_tbl` cou INNER JOIN `customer_tbl` cust ON cou.customer_id = cust.id WHERE cou.delivered_status = "Delivered";';
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }
            return res.status(200).json({ status: true, couriers: results });
        });
    },
    createCourier: (req, res) => {
        const data = req.body;    
        const query = 'INSERT INTO couriers_tbl (courier_number, location_from, location_to, weight, price, customer_id, payment_status, delivery_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [data.courier_number, data.location_from, data.location_to, data.weight, data.price, data.customer_id, data.payment_status, data.delivery_status];
    
        connection.query(query, values, (error, result) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }

            return res.status(201).json({ status: true, message: 'Courier requested successfully' });
        });
    },    
    getCourierById: (req, res) => {
        const courierId = req.params.id;
        const query = 'SELECT cou.*, cust.name, cust.phone, cust.email FROM `couriers_tbl` cou INNER JOIN `customer_tbl` cust ON cou.customer_id = cust.id WHERE cou.id = ?';
        
        connection.query(query, [courierId], (error, result) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }

            if (result.length === 0) {
                return res.status(404).json({ status: false, error: 'Courier not found' });
            }

            return res.status(200).json({ status: true, courier: result[0] });
        });
    },
    updateCourier: (req, res) => {
        const courierId = req.params.id;
        const newData = req.body;
        
        const query = 'UPDATE couriers_tbl SET courier_number=?, location_from=?, location_to=?, weight=?, price=?, customer_id=?, payment_status=?, delivered_status=? WHERE id=?';
        const values = [newData.courier_number, newData.location_from, newData.location_to, newData.weight, newData.price, newData.customer_id, newData.payment_status, newData.delivered_status, courierId];
        
        connection.query(query, values, (error, result) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ status: false, error: 'Courier not found' });
            }

            return res.status(200).json({ status: true, message: 'Courier updated successfully' });
        });
    },
    countCouriers: (req, res) => {
        const today = moment().format('YYYY-MM-DD');
        const queryAll = `SELECT COUNT(*) AS total FROM couriers_tbl`;
        const queryToday = `SELECT COUNT(*) AS today FROM couriers_tbl WHERE date = ?`;
        
        connection.query(queryAll, [], (error, resultsAll) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }
            
            connection.query(queryToday, [today], (error, resultsToday) => {
                if (error) {
                    console.error('Error executing query:', error);
                    return res.status(500).json({ status: false, error: 'Internal server error' });
                }
                
                const totalCount = resultsAll[0].total;
                const todayCount = resultsToday[0].today;
                
                return res.status(200).json({ status: true, "totalCount":totalCount, "todayCount":todayCount });
            });
        });
    }
  };
  
  module.exports = CouriersController;