import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    const userJson = localStorage.getItem('user');
    const userData = JSON.parse(userJson);
    const user = userData.user;
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" className='text-white ms-2'>Courier Pro</Navbar.Brand>
            {isLoggedIn && (
                <Navbar.Text className='ms-auto  text-white me-2'>
                    <strong>{ user.name }</strong>
                </Navbar.Text>
            )}
        </Navbar>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(Header);
