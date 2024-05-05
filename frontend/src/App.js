import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { login } from './authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Couriers from './components/Couriers/Couriers';
import CreateCouriers from './components/Couriers/CreateCouriers';
import Customers from './components/Customers/Customers';
import CreateCustomers from './components/Customers/CreateCustomers';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Business from './components/Business';
import Cancelation from './components/Cancelation';
import Faq from './components/FAQ';
import Feedback from './components/Feedback';
import PaymentPage from './components/Payment';


const App = ({ login }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Business" element={ <Business/>} />
        <Route path="/Cancelation" element={ <Cancelation/>} />
        <Route path="/FAQ" element={ <Faq/>} />
        <Route path="/Feedback" element={ <Feedback/>} />
        <Route path="/Payment" element={ <PaymentPage/>} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/couriers" element={isLoggedIn ? <Couriers /> : <Navigate to="/" />} />
        <Route path="/couriers/add" element={isLoggedIn ? <CreateCouriers /> : <Navigate to="/" />} />
        <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
        <Route path="/customers/add" element={isLoggedIn ? <CreateCustomers /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
