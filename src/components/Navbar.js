import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import { FaAlignRight, FaToggleOff } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {


    const [show, handleShow] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }



    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll');
        }

    }, [])



    return (
        <nav className={`navbar ${show && 'navBlack'}`}>

            <div className='nav-center'>
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="Beach Resort" />
                    </Link>

                    <ul className={isOpen ? "nav-links show-nav animate" : 'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>

                    </ul>
                    <button type='button' className='nav-btn' onClick={handleToggle}>

                        <FaAlignRight className='nav-icon' />

                    </button>


                </div>

            </div>
        </nav>
    )
}

export default Navbar
