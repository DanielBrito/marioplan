import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import starImg from '../../assets/mario-star.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <div id="nav-item" className="container">
                    <Link to='/' className="brand-logo">
                        <img id="star" className="materialboxed" src={starImg} alt="Mario Star"/>
                        MarioPlan
                    </Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </div>
        </nav>
        
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return [
        
    ]
}

export default connect(
    mapStateToProps
)(Navbar)