import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Layout({children}) {
    return (
        <div>
            <nav className="navbar is-info is-size-4">
                <div className="navbar-start container">
                    <NavLink className="navbar-item mr-5" to="/faculty">
                        Faculties
                    </NavLink>
                    <NavLink className="navbar-item mr-5" to="/department">
                        Departments
                    </NavLink>
                    <NavLink className="navbar-item mr-5" to="/group">
                        Groups
                    </NavLink>
                    <NavLink className="navbar-item mr-5" to="/student">
                        Students
                    </NavLink>
                    <NavLink className="navbar-item" to="/teacher">
                        Teachers
                    </NavLink>
                </div>
            </nav>
            <div className="container my-5">
                {children}
            </div>
        </div>
    )
}


