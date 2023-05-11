import '../index.css'
import { Link } from 'react-router-dom'

export default function Header () {
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
                    <ul className='nav-list'>
                        <li className="list-item">
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
                </nav>
            </div>
        </>
    )
}