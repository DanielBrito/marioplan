import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import star from '../../assets/mario-star.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="container">
                    <Link to='/' className="brand-logo">
                        <img id="star" className="materialboxed" src={star} alt="Mario Star"/>
                        MarioPlan
                    </Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar