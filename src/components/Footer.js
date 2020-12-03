import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'

const Footer = () => {

    const [show, handleShow] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    // const handleToggle = () => {
    //     setIsOpen(!isOpen)
    // }

    //handletoggle not used, only in navbar 

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

            <div className='footer'>
                <Link to='/'>
                    <img src={logo} alt="Beach Resort" style={{ width: '100%' }} />
                </Link>
                <div className='copyright'>
                    <p>Copyright Beach Resort 2020</p>
                </div>
                <ul className=' footer-links'>
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
