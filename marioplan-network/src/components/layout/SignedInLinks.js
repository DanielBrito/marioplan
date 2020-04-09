import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li className="nav-item"><NavLink to='/create'>New Project</NavLink></li>
                <li className="nav-item"><NavLink to='/'>Logout</NavLink></li>
                <li className="nav-item"><NavLink to='/' className="btn btn-floating blue lighten-1">DB</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks
