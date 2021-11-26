import React from 'react'
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../logo.png';
import Footer from './Footer';
import App2 from './App2';

class  Navbar extends React.Component {
    render(){
    return (
        <Router>
        <nav >
            <NavLink to="/App" onClick={() => {window.location.href="/App"}} className='logo'>
                <img src={logo} alt=''/>
            </NavLink>
            <input className='menu-btn' type="checkbox" id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><NavLink to="/App" onClick={() => {window.location.href="/App"}} style={{ textDecoration: 'none' }}>Home</NavLink></li>
                <li><NavLink to="./Footer" style={{ textDecoration: 'none' }}>Gallery</NavLink></li>
                <li><NavLink to="/App2" onClick={() => {window.location.href="/App2"}} style={{ textDecoration: 'none' }}>Reservations</NavLink></li>
                <li><NavLink to="#" style={{ textDecoration: 'none' }}>About Us</NavLink></li>
            </ul>

        </nav>
        </Router>
    )
}
}
export default Navbar
