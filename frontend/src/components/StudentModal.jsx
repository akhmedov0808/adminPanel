import React from 'react'

export default function StudentModal({ item }) {
    return (
        <div className="has-text-centered">
            <b className="is-size-4 has-text-info">Student:</b>
            <span className="is-size-4"> {item.name}</span>
            <br />
            <b className="is-size-4 has-text-info">Group:</b>
            <span className="is-size-4"> {item.group.name}</span>
        </div>
    )
}
