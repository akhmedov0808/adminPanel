import React from 'react'

export default function DepartmentModal({ item }) {
    return (
        <div>
            <b className="is-size-5 has-text-info">Department:</b>
            <span className="is-size-5"> {item.name}</span>
            <br />
            <b className="is-size-5 has-text-info">Faculty:</b>
            <span className="is-size-5"> Students</span>
        </div>
    )
}
