import React from "react"

export default function DepartmentModal({ item }) {
    return (
        <div className="has-text-centered">
            <b className="is-size-4 has-text-info">Department:</b>
            <span className="is-size-4" > {item.name}</span>
            <br />
            <b className="is-size-4 has-text-info">Faculty:</b>
            <span className="is-size-4"> {item.faculty.name}</span>
        </div>
    )
}


