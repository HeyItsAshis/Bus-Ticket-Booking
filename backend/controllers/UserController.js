const connection = require('../connection.js');

const UserController = {
    getAllUsers: (req, res) => {
      // Implement logic to fetch all users from the database
    },
    createUser: (req, res) => {
      // Implement logic to create a new user in the database
    },
    getUserById: (req, res) => {
      // Implement logic to fetch a user by ID from the database
    },
    updateUser: (req, res) => {
      // Implement logic to update a user in the database
    },
    deleteUser: (req, res) => {
      // Implement logic to delete a user from the database
    },
    loginUser: (req, res) => {
        const { email, password } = req.body;
        const query = `SELECT * FROM users_tbl WHERE email = ? AND password = ?`;
        connection.query(query, [email, password], (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ status: false, error: 'Internal server error' });
            }
            
            if (results.length === 0) {
                return res.status(401).json({ status: false, message: 'User not found' });
            }
            
            const user = results[0];
            return res.status(200).json({ status:true, user:user });
        });
    }
  };
  
  module.exports = UserController;