import React from 'react'

export default function TeacherModal({ item }) {
    return (
        <div>
            <b className="is-size-5 has-text-info">Teacher:</b>
            <span className="is-size-5"> {item.name}</span>
            <br />
            <b className="is-size-5 has-text-info">Groups:</b>
            {item ? (item.group.map((group) => (
                <span key={group.id}>
                    <span className="is-size-5"> {group.name},</span>
                </span>
            ))) : null}
        </div>
    )
}
