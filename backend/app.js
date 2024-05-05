const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRouter');
const courierRoutes = require('./routes/courierRouter');
const customerRoutes = require('./routes/customerRouter');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/couriers', courierRoutes);
app.use('/api/customers', customerRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
