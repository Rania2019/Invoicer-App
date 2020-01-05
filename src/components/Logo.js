import React from 'react';
import Logo from '../Images/logo.jpg';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style= {{height: props.height}}>
        <img src={Logo} alt="CompanyLogo" />
    </div>
);

export default logo;