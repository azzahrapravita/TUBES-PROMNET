
import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#ffffff'}} >SearDucation</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Information</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Talk Session</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Management System</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="/">Logout</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
