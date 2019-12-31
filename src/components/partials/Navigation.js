import React, { useState } from 'react'

// styles 
import './Navigation.scss';

// routing 
import { NavLink } from 'react-router-dom';

// partials 
import Brand from '../partials/Brand';

const Navigation = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    // toggle burger menu when clicked
    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    // close burger menu when menu link is clicked
    const closeBurgerMenu = () => {
        if (isBurgerMenuOpen === true) {
            toggleBurgerMenu();
        }
    }

    return (
        <div>
            <div className="nav-container">
                <Brand />
                <div className="nav-menu">
                    <NavLink 
                    className='nav-link' 
                    onClick={e => {
                        closeBurgerMenu(e)
                    }}
                    exact to='/'>
                        Home
                    </NavLink>
                    <NavLink 
                    className='nav-link'
                    onClick={e => {
                        closeBurgerMenu(e)
                    }} 
                    exact to='/about'>
                        About
                    </NavLink>
                    <NavLink 
                    className='nav-link'
                    onClick={e => {
                        closeBurgerMenu(e)
                    }} 
                    exact to='/contact'>
                        Contact
                    </NavLink>
                </div>
                <div className='nav-burger'>
					<i className='fas fa-bars' onClick={toggleBurgerMenu}></i>
				</div>
            </div>

            {isBurgerMenuOpen ? (
                <div className="nav-mobile-menu">
                    <NavLink
                    className="nav-link"
                    onClick={e => {
                        closeBurgerMenu(e);
                    }}
                    exact to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink
                    className="nav-link"
                    onClick={e => {
                        closeBurgerMenu(e);
                    }}
                    exact to='/about'
                    >
                        About
                    </NavLink>
                    <NavLink
                    className="nav-link"
                    onClick={e => {
                        closeBurgerMenu(e);
                    }}
                    exact to='/contact'
                    >
                        Contact
                    </NavLink>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Navigation;
