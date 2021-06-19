import React from 'react'

export default function Layout({ children }) {
    return (
        <div>
            <div className="container my-5">
                {children}
            </div>
        </div>
    )
}
