import React from 'react'

export default function GroupModal({ item }) {
    return (
        <div>
            <b className="is-size-5 has-text-info">Group:</b>
            <span className="is-size-5"> {item.name}</span>
            <br />
            <b className="is-size-5 has-text-info">Department:</b>
            <span className="is-size-5"> {item.department.name}</span>
        </div>
    )
}
