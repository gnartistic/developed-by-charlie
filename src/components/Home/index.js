import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss';

const Home = () =>
{
    return (
        <div className='home-container'>
            <div className='hero'>
                <h1 className='hero-title'>
                    Do you need something built, painted, or remodeled?
                </h1>
                <h2 className='hero-subtitle'>
                    Your dream home can be a reality.
                    <br />
                    Lets make it happen!
                </h2>
                <div className='contact-button-container'>
                    <NavLink exact='true' to='/contact'>
                        <div className='contact-button'>
                            Get in touch
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home