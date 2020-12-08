import React from 'react';
import './NavbarMobile.scss';
import logo from './logo.svg';

const NavbarMobile = (props:any) => (
    <div className="ed-container full bg-navbar">
        <div className="ed-item s-55 s-left">
            <img src={logo} alt=""/>
        </div>

        <div className="ed-item s-45 s-right icons flex">
            <span className="icon icon-search"></span>
            <span className="icon icon-user"></span>

            <div className="cart">
                <span className="icon icon-ct-cart"></span>
                <span id="cart_menu_num" className="badge rounded-circle">
                    5
                </span>
            </div>
        </div>
    </div> 
);

export default NavbarMobile;