import React from 'react';
import logo from '../../assets/photos/constructionLogo.png';
import './index.scss';
import Menu from './Menu.js';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
{
    return (
        <>
            <div>
                <Menu left pageWrapId={"pageWrap"} outerContainerId={"Navbar"} />
            </div>
            <div className='navbar-container'>
                <div className='logo-container'>

                    <NavLink exact='true' to='/'> 
                    <img className='logo' alt='logo' src={logo} />
                        <h1 className='logo-text'>Constructed by Charlie</h1>
                        </NavLink>
                </div>
                <div className="navbar-links">
                        <NavLink exact='true' to='/'>Home</NavLink>
                        <NavLink exact='true' to='/about'>About</NavLink>
                        <NavLink exact='true' to='/work'>Work</NavLink>
                        <NavLink exact='true' to='/contact'>Let's talk</NavLink>
                    </div>
            </div>
        </>
    )
}

export default Navbar