// Using Link for the navigation menu
import '../index.css'
import { Link } from 'react-router-dom'
import HamburgerNav from './Hamburger'
import { useState } from 'react'

// Building out the navigation bar with a logo and a user icon
export default function Nav () {
    // useState to toggle burger menu on and off
    const [hamburgerOpen, setHamburgeropen] = useState(false)

    // Toggle Function
    const toggleHamburger = () => {
        setHamburgeropen(!hamburgerOpen)
    }

    return (
        <>
            <div className="nav-container">
                <nav className='navbar'>
                    <a 
                    href="/" >
                        <img
                        className="logo" 
                        src='/assets/logo.png' 
                        alt="logo"
                        />
                    </a>
                    {/* Changing the nav list accordingly */}
                    <ul className={`nav-list ${hamburgerOpen ? "open" : ""}`}>
                        <li 
                        className="list-item">
                            <Link 
                            className='nav-link' 
                            to="/">Home</Link>
                        </li>
                        <li className="list-item">
                            <Link 
                            className='nav-link' 
                            to="/shop">Shop</Link>
                        </li>
                        <li className="list-item">
                            <Link 
                            className='nav-link' 
                            to="/interest">Interest</Link>
                        </li>
                        <li className="list-item">
                            <Link 
                            className='nav-link' 
                            to="/legal">Legal</Link>
                        </li>
                        <li className="list-item">
                            <Link 
                            className='nav-link' 
                            to="/user">
                                <img 
                                className='user-icon'
                                src='/assets/user-icon.png' 
                                alt="User Icon"
                                />
                            </Link>
                        </li>
                    </ul>
                    {/* Bringing in the burger toggle */}
                    <div className='burger-click' onClick={toggleHamburger}>
                        <HamburgerNav />
                    </div>
                </nav>

            </div>
        </>
    )
}
