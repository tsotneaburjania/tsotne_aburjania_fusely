import React from 'react'
import fuselyLogo from '../images/fusely_logo.svg'
import burger_menu from '../images/burger_menu.svg'
import '../styles/Navbar.scss';
import ButtonPurple from './ButtonPurple';
import ButtonWhite from './ButtonWhite';


function Navbar() {
    return (
        <div id="navbar">
            <img src={fuselyLogo} alt="Fusely"/>
            <ul className="navLinks">
                <li>
                    <a href="https://google.com">Home</a>
                </li>
                <li>
                    <a href="https://google.com">Features</a>
                </li>
                <li>
                    <a href="https://google.com">Pricing</a>
                </li>
                <li>
                    <a href="https://google.com">Blog</a>
                </li>
                <li>
                    <a href="https://google.com">Contact</a>
                </li>
            </ul>
            <div className="buttons">
                <ButtonWhite text="Log in" />
                <ButtonPurple text="Get Started" />
            </div>
            <div className='burgerMenu'>
                <img src={burger_menu} alt='menu'/>
            </div>
        </div>
    )
}

export default Navbar
