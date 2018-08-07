import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';



const Navigation = ({ onRouteChange, isSignedIn }) => {
        if(isSignedIn) {
            return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer'> Sign out </p>
    </nav>
            );
        } else {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa3 pointer'> Sign In </p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black pa3 pointer'> Register </p>
    </nav>
            )
        }
}

export default Navigation;

Navigation.propTypes = {
    onRouteChange: PropTypes.func,
    isSignedIn: PropTypes.bool
  };