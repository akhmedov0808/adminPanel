import React from 'react'

export default function FacultyModal({ item }) {
    return (
        <div>
            <b className="is-size-5 has-text-info">Faculty:</b>
            <span className="is-size-5"> {item.name}</span>
        </div>
    )
}
