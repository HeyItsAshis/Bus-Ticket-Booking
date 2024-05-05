import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
          <Navbar expand="lg" bg="danger" data-bs-theme="danger" sticky='top' style={{minHeight: "80px"}}>
            <Container >
                <Navbar.Brand href="#home">
                <img src="logo.png" className='me-2' height="35" alt="" />
                 <Link className="navbar-brand text-white p-2" to="/">SAFAR</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-center">
                    <Nav.Link className='text-white' href="/">Home</Nav.Link>
                    <Nav.Link className='text-white' href="/contact">Contact</Nav.Link>
                    <Nav.Link className='text-white' href="/FAQ">FAQs</Nav.Link>
                    <Nav.Link className='text-white' href="/Feedback">Feedback</Nav.Link>
                    <Nav.Link className='text-white' href="/Cancelation">Cancel Ticket</Nav.Link>
                    <NavDropdown variant="danger" title="Business" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Login">
                            Business Login
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Business">
                            Business Registration
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div className='btn-group'>
                <Link className='btn btn-dark' to="/login">Login</Link>
                <Link className="btn btn-outline-dark" to="/register" >Registration</Link>
                </div>
            </Container>
          </Navbar>
        </>
      );
}

export default NavigationBar;