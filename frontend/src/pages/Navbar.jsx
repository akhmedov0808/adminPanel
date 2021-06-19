import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar is-info is-size-4">
            <div className="navbar-start container">
                <NavLink className="navbar-item mr-5" to="/faculty">
                    <b>Faculties</b>
                </NavLink>
                <NavLink className="navbar-item mr-5" to="/">
                    <b>Departments</b>
                </NavLink>
                <NavLink className="navbar-item mr-5" to="/group">
                    <b>Groups</b>
                </NavLink>
                <NavLink className="navbar-item mr-5" to="/student">
                    <b>Students</b>
                </NavLink>
                <NavLink className="navbar-item" to="/teacher">
                    <b>Teachers</b>
                </NavLink>
            </div>
        </nav>
    )
}
