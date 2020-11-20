import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'

const Footer = () => {

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
        <div >

            <div >
                <div >
                    <Link to='/'>
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>

                        <FaAlignRight className='nav-icon' />

                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : 'nav-links'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>

                </ul>
            </div>
        </div>


    )
}


export default Footer
