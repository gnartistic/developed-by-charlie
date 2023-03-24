import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

// eslint-disable-next-line 
export default props =>
{
    return (
        <>
            <Menu right className='mobileMenu' pageWrapId={"pageWrap"} outerContainerId={"Navbar"}>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' size='large' to='/'>Home</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/about'>why us</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/Residential'>Residential</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/commercial'>Commercial</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/contact'>Let's talk</NavLink>
                </li>
                <div>
                    {/* <img src={} alt={}/> */}
                </div>
            </Menu>
        </>
    );
};