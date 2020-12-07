import React from 'react';
import './NavbarMobile.scss';
import logo from './logo.svg';

const NavbarMobile = (props:any) => (
    <div className="ed-container bg-navbar">
        <div className="ed-item s-50 s-center">
            <img src={logo} alt=""/>
        </div>

        <div className="ed-item s-50 s-right s-center">
            <span className="icon">1</span>
            <span className="icon">2</span>
            <span className="icon">3</span>
        </div>
    </div>
    
);

export default NavbarMobile;