import React from 'react'

export default function FacultyModal({ item }) {
    return (
        <div className="has-text-centered">
            <b className="is-size-4 has-text-info">Faculty:</b>
            <span className="is-size-4"> {item.name}</span>
        </div>
    )
}
