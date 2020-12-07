import React from 'react';
import './NavbarMobile.scss';
import logo from './logo.svg';

const NavbarMobile = (props:any) => (
    <div className="ed-container bg-navbar">
        <div className="ed-item s-50 s-center">
            <img src={logo} alt=""/>
        </div>

        <div className="ed-item s-50 s-right s-center">
            <span className="icon icon-search"></span>
            <span className="icon icon-user"></span>
            <span className="icon icon-ct-cart"></span>
        </div>
    </div>
    
);

export default NavbarMobile;